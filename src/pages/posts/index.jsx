import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
import { getAllPosts } from '../../lib/queries';

const Posts = () => {
  const { data } = useQuery('posts', getAllPosts);
  const { posts, tags } = data;

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
            <h1 className='prose-2xl prose'>Featured Posts</h1>
            <ul className='flex flex-wrap gap-2'>
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

            <ul className='mt-12 flex flex-col gap-y-4'>
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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('posts', getAllPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Posts;
