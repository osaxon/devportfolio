import { gql } from '@apollo/client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';

import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';
import client from '../../lib/apolloClient';
import { getPage } from '../../lib/queries';

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
  });

  useEffect(() => {
    console.log(data);
  });

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
      {JSON.stringify(data.pages)}
      <button onClick={() => fetchNextPage()}>fetchNextPage</button>
    </Layout>
  );
};

export default AllPosts;
