import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
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
import { getSinglePost } from '../../lib/queries';

const Post = ({ notFound }) => {
  const { query } = useRouter();
  const { data } = useQuery(
    [['get_post'], query.slug],
    () => getSinglePost(query),
    {
      enabled: query.length > 0,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { post, image, content } = data;

  if (data) {
    return (
      <Layout>
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
              <div className='relative h-96 w-full'>
                <Image
                  alt={post.title}
                  src={image}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover'
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
  }
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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['get_post', params.slug], () =>
    getSinglePost(params.slug)
  );

  const queryData = await queryClient.getQueryData(['get_post', params.slug]);

  if (!queryData) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      notFound: false,
    },
  };
}

export default Post;
