import { gql } from '@apollo/client';
import React from 'react';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';

const Posts = ({ posts }) => {
  return (
    <Layout>
      <Seo />
      <main className='dark:bg-zinc-800'>
        <section className=' min-h-screen'>
          <div className='layout py-10'>
            <h1>Featured Posts</h1>
            <ul className='mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
              {posts &&
                posts.map((post) => (
                  <li
                    className='animate-shadow w-full scale-100 rounded-md border border-zinc-300 bg-white dark:border-zinc-600'
                    key={post.id}
                  >
                    <Post post={post} />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query Posts {
        posts {
          createdAt
          id
          publishedAt
          title
          updatedAt
          content {
            html
          }
          excerpt
          coverImage {
            height
            width
            url
          }
          slug
        }
      }
    `,
  });

  const posts = data.data.posts;

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Posts;
