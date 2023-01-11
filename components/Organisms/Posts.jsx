'use client'

import Link from 'next/link'
import React, { useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

import { Spinner } from '../Atoms'
import { useFetchPosts } from '../../hooks/queryHooks'

const Posts = () => {
    const { ref, inView } = useInView({ threshold: 1, delay: 300 });

    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
      } = useFetchPosts();

      useEffect(() => {
        if (inView) {
          fetchNextPage();
        }
        console.log(data)
      }, [inView, fetchNextPage]);
  
    return status === 'loading' ? (
        <Spinner />
    ) : status === 'error' ? (
        <span>Error</span>
    ) : (
    <section className='layout flex flex-col gap-4'>
        {data && data.pages?.map((page) => (
            <ul key={page.data.postsConnection.pageInfo.startCursor}>
              {page?.data.postsConnection.edges.map((edge) => (
                <li
                  className='relative h-[calc(100vh-15rem)] w-full cursor-pointer'
                  key={edge.node.id}
                >
                  <Link
                    className='text-4xl text-primary-content'
                    href={`/blog/${edge.node.slug}`}
                  >
                    {edge.node.title}
                  </Link>
                </li>
              ))}
            </ul>
        ))}
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
    </section>
  )
}

export default Posts