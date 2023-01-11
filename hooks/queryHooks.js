import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchPosts } from '../lib/queries';

export const useFetchPosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts_page'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.postsConnection.pageInfo.hasNextPage) {
        return lastPage.data.postsConnection.pageInfo.endCursor;
      }
      return undefined;
    },
    refetchOnWindowFocus: false,
  });
};
