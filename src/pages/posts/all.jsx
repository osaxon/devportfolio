import { gql } from '@apollo/client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';

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
        }
      }
    }
  }
`;

const AllPosts = () => {
  const [current, setCurrent] = useState('');
  const [posts, setPosts] = useState([]);
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
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
    onSuccess: (data) => {
      setCurrent(data?.pages[data?.pages.length - 1].data.postsConnection);
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

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
      <div className='layout'>
        {data.pages.map((page) => (
          <React.Fragment key={page.data.postsConnection.startCursor}>
            {page.data.postsConnection.edges.map((edge) => (
              <p key={edge.node.id}>{edge.node.slug}</p>
            ))}
          </React.Fragment>
        ))}

        <button
          disabled={!hasNextPage}
          className='btn'
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load Newer'
            : 'Nothing more to load'}
        </button>
      </div>
    </Layout>
  );
};

export default AllPosts;
