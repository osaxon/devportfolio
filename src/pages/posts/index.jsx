import { gql } from '@apollo/client';
import uniq from 'lodash/uniq';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';

const Posts = ({ posts, tags }) => {
  const [filteredPosts, setFilteredPosts] = useState(() => [...posts]);
  const [selectedTags, setSelectedTags] = useState([]);

  // check if tag has been selected
  const checkSelectedTag = useCallback(
    (tag) => {
      return selectedTags.includes(tag);
    },
    [selectedTags]
  );

  const filterPosts = useCallback(
    (data) => {
      return data.filter((post) => {
        return post.tags.some((tag) => {
          return checkSelectedTag(tag);
        });
      });
    },
    [checkSelectedTag]
  );

  // clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
    return;
  };

  // remove a single tag
  const removeTag = (val) => {
    setSelectedTags((current) =>
      current.filter((tag) => {
        return tag !== val;
      })
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (selectedTags.includes(val)) {
      removeTag(val);
      return;
    }
    setSelectedTags((prev) => [...prev, val]);
  };

  useEffect(() => {
    if (selectedTags.length > 0) {
      setFilteredPosts(filterPosts(posts));
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedTags, filterPosts, posts]);

  return (
    <Layout>
      <Seo
        description='Latest blog posts from Oli Saxon.'
        keywords='web development, Next.js'
      />
      <main>
        <section className='min-h-[calc(100vh-5rem)]'>
          <div className='layout py-10'>
            <h1 className='prose prose-2xl'>Featured Posts</h1>
            <ul className='flex flex-wrap gap-2'>
              <li>
                <button
                  type='button'
                  onClick={() => clearTags()}
                  className='badge'
                >
                  Clear
                </button>
              </li>
              {tags &&
                tags.map((tag) => (
                  <li key={tag}>
                    <button
                      value={tag}
                      aria-disabled={checkSelectedTag(tag)}
                      onClick={(e) => handleClick(e)}
                      className='badge'
                    >
                      {tag}
                    </button>
                  </li>
                ))}
            </ul>

            <ul className='mt-12 grid gap-1 md:grid-cols-2 xl:grid-cols-3'>
              {filteredPosts.map((post) => (
                <li
                  className='cursor-pointer border-b-2 border-teal-300'
                  key={post.slug}
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

  function extractTags(data) {
    const tags = [];
    data.forEach((post) => post.tags.forEach((tag) => tags.push(tag)));
    return tags;
  }

  // remove duplictes
  const tags = uniq(extractTags(posts));

  return {
    props: {
      posts,
      tags,
    },
    revalidate: 10,
  };
}

export default Posts;
