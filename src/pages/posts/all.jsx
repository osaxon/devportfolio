import { gql } from '@apollo/client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Image from 'next/future/image';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';

import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';
import { buildImage } from '../../lib/cloudinary';

const POST_PAGE = gql`
  query MyQuery($first: Int, $cursor: String) {
    postsConnection(first: $first, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
      edges {
        cursor
        node {
          id
          slug
          title
          coverImage
        }
      }
    }
  }
`;

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
    queryFn: async ({ pageParam }) => {
      return client.query({
        query: POST_PAGE,
        variables: { first: 1, cursor: pageParam },
      });
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.data.postsConnection.pageInfo.hasNextPage) {
        return lastPage.data.postsConnection.pageInfo.endCursor;
      }
      return undefined;
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <Link href={edge.node.slug}>
                    <h3 className='text-4xl text-primary-content'>
                      {edge.node.title}
                    </h3>
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
