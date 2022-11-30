import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Prism from 'prismjs';
import React, { useEffect } from 'react';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-jsx';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import DateComponent from '../../components/DateComponent';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';
import { buildImage } from '../../lib/cloudinary';

const Post = ({ post, content }) => {
  const image = buildImage(post.coverImage.public_id)
    .resize('w_600,h_400')
    .toURL();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      {/* Fetching SEO details from CMS lets you create a single dyanmic page [slug].jsx and have relevant SEO information injected into each page generated by Next.js SSG */}
      <Seo
        description={post.seo.description}
        title={post.seo.title}
        keywords={post.seo.keywords.toString()}
      />
      <main>
        <section className='min-h-screen'>
          <div className='layout py-10'>
            <h1>{post.title}</h1>
            <h4 className='py-4 font-thin italic'>
              <DateComponent dateString={post.date} />
            </h4>
            <div className='flex justify-center'>
              <Image
                alt={post.title}
                src={image}
                width={600}
                height={400}
                objectFit='contain'
              />
            </div>

            <article>
              <RichText
                content={content.raw}
                renderers={{
                  code_block: ({ children }) => {
                    return (
                      <pre className='line-numbers language-jsx '>
                        <code>{children}</code>
                      </pre>
                    );
                  },
                  ol: ({ children }) => (
                    <ol className='font-bold'>
                      <p>{children}</p>
                    </ol>
                  ),
                }}
              />
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await client.query({
    query: gql`
      query Posts {
        posts {
          createdAt
          id
          date
          title
          updatedAt
          content {
            html
            raw
            text
            markdown
          }
          coverImage
          slug
          seo {
            id
            title
            description
            keywords
            image {
              url
            }
          }
        }
      }
    `,
  });

  const paths = data.data.posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const data = await client.query({
    query: gql`
      query PostQuery($slug: String) {
        posts(where: { slug: $slug }) {
          content {
            html
            markdown
            raw
            text
          }
          coverImage
          date
          publishedAt
          tags
          title
          slug
          excerpt
          seo {
            id
            title
            description
            keywords
            image {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  const post = data.data.posts[0];
  const content = data.data.posts[0].content;

  return {
    props: {
      post,
      content,
    },
    revalidate: 10,
  };
}

export default Post;
