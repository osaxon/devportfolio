import { gql } from '@apollo/client';
import React, { useState } from 'react';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';

const Posts = ({ posts, topics }) => {
  const [filteredPosts, setFilteredPosts] = useState(() => [...posts]);
  const [selectedTopics, setSelectedTopics] = useState([]);

  function filterByTopic(data, val) {
    return data.filter((post) => {
      return post.topics.some((topic) => {
        return inSelectedTopics(topic.slug) || topic.slug === val;
      });
    });
  }

  const inSelectedTopics = (topic) => selectedTopics.includes(topic);

  function checkSelectedTopic(topic) {
    return selectedTopics.includes(topic);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const val = e.target.value;

    // clear selected topics
    if (!val) {
      setSelectedTopics('');
      setFilteredPosts(posts);
      return;
    }

    const index = selectedTopics.indexOf(val);

    // if not found add to list of topics
    if (index === -1) {
      setSelectedTopics((prev) => [...prev, val]);
    }

    // if already selected, remove it
    if (index > -1) {
      setSelectedTopics(selectedTopics.splice(index, 1));
    }
    setFilteredPosts(filterByTopic(posts, val));
  };

  return (
    <Layout>
      <Seo
        description='Latest blog posts from Oli Saxon.'
        keywords='web development, Next.js'
      />
      <main className='dark:bg-zinc-800'>
        <section className=' min-h-screen'>
          <div className='layout py-10'>
            <h1>Featured Posts</h1>
            <div className='flex items-start justify-between gap-2 pt-4 md:flex-row'>
              <ul className='flex flex-wrap items-start gap-2'>
                {selectedTopics.length > 0 && (
                  <li>
                    <button
                      type='button'
                      onClick={(e) => handleClick(e)}
                      className='inline-flex items-center rounded-full border border-transparent bg-rose-800/75 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-rose-700/75 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2'
                    >
                      Clear
                    </button>
                  </li>
                )}
                {topics &&
                  topics.map((topic) => (
                    <li key={topic.slug}>
                      <button
                        value={topic.slug}
                        disabled={checkSelectedTopic(topic.slug)}
                        onClick={(e) => handleClick(e)}
                        className='inline-flex items-center rounded-full border border-transparent bg-teal-600/75 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-teal-700/75 focus:outline-none focus:ring-2 focus:ring-teal-500/75 focus:ring-offset-2 disabled:opacity-25'
                      >
                        {topic.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            <ul className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
              {filteredPosts.map((post) => (
                <li className='cursor-pointer' key={post.slug}>
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
          date
          author {
            id
            name
            picture
          }
          title
          updatedAt
          content {
            html
          }
          coverImage
          excerpt
          slug
          readTime
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
