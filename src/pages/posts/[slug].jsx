import { gql } from '@apollo/client';
import Image from 'next/image';
import React from 'react';

import DateComponent from '../../components/DateComponent';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';

const Post = ({ post, content }) => {
  return (
    <Layout>
      <Seo
        description={post.seo.description}
        title={post.seo.title}
        keywords={post.seo.keywords.toString()}
      />
      <main className='dark:bg-zinc-700'>
        <section className='min-h-screen'>
          <div className='layout py-10'>
            <h1>{post.title}</h1>
            <h4 className='py-4 font-thin italic text-zinc-500'>
              <DateComponent dateString={post.date} />
            </h4>
            <Image
              alt={post.title}
              src={post.coverImage.url}
              width={post.coverImage.width}
              height={post.coverImage.height}
              objectFit='cover'
            />
            <article className='mt-4'>
              <div dangerouslySetInnerHTML={{ __html: content }} />
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
  const content = data.data.posts[0].content.html;

  return {
    props: {
      post,
      content,
    },
    revalidate: 10,
  };
}

export default Post;
