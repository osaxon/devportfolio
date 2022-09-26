import { GraphQLClient } from 'graphql-request';
import React from 'react';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

const Posts = ({ posts }) => {
  return (
    <Layout>
      <Seo />
      <main className='dark:bg-zinc-800'>
        <section className=' min-h-screen'>
          <div className='layout py-20'>
            <h2>Posts</h2>
            <ul className='mt-8 grid grid-cols-1 gap-2 md:grid-cols-2'>
              {posts &&
                posts.map((post) => (
                  <li key={post.id}>
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
  const { posts } = await graphcms.request(
    `
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
        coverImage {
          height
          width
          url
        }
        slug
      }
    }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
