import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import { Post } from '../../components/Post';
import Seo from '../../components/Seo';
import { getAllPosts } from '../../lib/queries';

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  });
}

const Posts = () => {
  const { status, data, error, isFetching } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (data?.posts) {
      setFilteredPosts(() => [...data.posts]);
    }
  }, [data]);

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
      setFilteredPosts(filterPosts(data?.posts));
    } else {
      setFilteredPosts(data?.posts);
    }
  }, [selectedTags, filterPosts, data?.posts]);

  return (
    <Layout>
      <Seo
        title='Blog | Oli Saxon'
        description='Latest blog posts from Oli Saxon.'
        keywords='web development, Next.js'
      />
      <main>
        {status === 'error' ? (
          'error...'
        ) : status === 'loading' ? (
          'loading...'
        ) : (
          <section className='min-h-[calc(100vh-5rem)]'>
            <div className='layout py-10'>
              <h1 className='prose-2xl prose'>Featured Posts</h1>
              <ul className='flex flex-wrap gap-2'>
                {data?.tags &&
                  data?.tags.map((tag) => (
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

              <ul className='mt-12 flex flex-col gap-y-4 divide-y-2 divide-primary'>
                {filteredPosts?.map((post) => (
                  <li
                    className='cursor-pointer border-primary py-2 first:border-t-2 last:border-b-4'
                    key={post.slug}
                  >
                    <Post post={post} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
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
