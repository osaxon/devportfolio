import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';
import { buildImage } from '../../lib/cloudinary';
import { POST_PAGE } from '../../lib/queries';

async function fetchPage({ pageParam }) {
  const data = await client.query({
    query: POST_PAGE,
    variables: { first: 1, cursor: pageParam },
  });
  return data;
}

const AllPosts = () => {
  const [scrollY, setScrollY] = useState(0);
  const { ref, inView } = useInView({ threshold: 1, delay: 300 });

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts_page'],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.postsConnection.pageInfo.hasNextPage) {
        return lastPage.data.postsConnection.pageInfo.endCursor;
      }
      return undefined;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <Layout>
      <Seo
        title='Blog | Oli Saxon'
        description='Latest blog posts from Oli Saxon.'
        keywords='web development, Next.js'
      />
      <div className='layout relative flex min-h-screen flex-col justify-between'>
        <section>
          {data.pages.map((page) => (
            <ul className='border' key={page.data.postsConnection.startCursor}>
              {page.data.postsConnection.edges.map((edge) => (
                <li
                  className='relative h-[calc(100vh-15rem)] w-full cursor-pointer'
                  key={edge.node.id}
                >
                  <Link
                    className='text-4xl text-primary-content'
                    href={edge.node.slug}
                  >
                    {edge.node.title}
                  </Link>
                  <Image
                    alt='image'
                    src={buildImage(edge.node.coverImage.public_id)
                      .resize('w_1200,h_900')
                      .toURL()}
                    fill
                    className='absolute -z-50 object-cover'
                  />
                </li>
              ))}
            </ul>
          ))}
        </section>

        <button
          ref={ref}
          disabled={!hasNextPage}
          className='btn'
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
        <p className='fixed bottom-0 text-4xl text-white'>{scrollY}</p>
      </div>
    </Layout>
  );
};

export default AllPosts;
