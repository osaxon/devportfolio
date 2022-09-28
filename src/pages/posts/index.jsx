import { gql } from '@apollo/client';
import React, { useState } from 'react';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
import TopicButton from '../../components/TopicButton';
import client from '../../lib/apolloClient';

const Posts = ({ posts, topics }) => {
  const [filteredPosts, setFilteredPosts] = useState(() => [...posts]);
  const [selectedTopics, setSelectedTopics] = useState('');

  function filterByTopic(data, q) {
    return data.filter((post) => {
      return post.topics.some((topic) => {
        return topic.slug === q;
      });
    });
  }

  function checkSelectedTopic(topic) {
    return selectedTopics.includes(topic);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val === 'x') {
      setSelectedTopics('');
      setFilteredPosts(posts);
      return;
    }
    if (!selectedTopics.includes(val)) {
      setSelectedTopics([...selectedTopics, val]);
    }
    setFilteredPosts(filterByTopic(posts, val));
  };

  return (
    <Layout>
      <Seo />
      <main className='dark:bg-zinc-800'>
        <section className=' min-h-screen'>
          <div className='layout py-10'>
            <h1>Featured Posts</h1>
            <div className='flex items-start justify-between gap-2 pt-4 md:flex-row'>
              <ul className='flex flex-wrap items-center justify-start gap-2  align-middle'>
                {topics &&
                  topics.map((topic) => (
                    <li key={topic.slug}>
                      <TopicButton
                        handler={(e) => handleClick(e)}
                        topic={topic}
                        disabled={checkSelectedTopic(topic.slug)}
                      />
                    </li>
                  ))}
              </ul>
              {topics && (
                <button
                  onClick={(e) => handleClick(e)}
                  value='x'
                  className='rounded-full bg-teal-400 px-4 py-1 text-xs text-zinc-900 dark:bg-rose-600 dark:text-zinc-50'
                >
                  Clear
                </button>
              )}
            </div>

            <ul className='grid gap-4 rounded-sm py-6 sm:grid-cols-2 xl:grid-cols-3'>
              {filteredPosts &&
                filteredPosts.map((post) => (
                  <li
                    className='w-full rounded-sm border border-zinc-300 dark:border-zinc-600'
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
          tags
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
          topics {
            id
            slug
            name
          }
        }
        topics(where: { NOT: {}, posts_every: {} }) {
          id
          slug
          name
        }
      }
    `,
  });

  const posts = data.data.posts;
  const topics = data.data.topics;

  return {
    props: {
      posts,
      topics,
    },
    revalidate: 10,
  };
}

export default Posts;
