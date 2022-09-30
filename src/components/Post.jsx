import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import DateComponent from './DateComponent';

export const Post = ({ post }) => {
  const topics = post.topics;
  return (
    <Link href={`posts/${post.slug}`}>
      <div className='flex h-full min-w-fit  flex-col overflow-hidden rounded-sm bg-zinc-50 shadow-lg dark:bg-zinc-600/50 md:flex-row-reverse'>
        <div className='flex flex-1 flex-col justify-between p-6'>
          <div className='flex-1'>
            <ul className='flex gap-1'>
              {topics &&
                topics.map((topic) => (
                  <li key={topic.slug}>
                    <span className='prose inline-flex items-center rounded-full border-transparent bg-zinc-600/75 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-zinc-700/75 disabled:opacity-25'>
                      {topic.name}
                    </span>
                  </li>
                ))}
            </ul>
            <a href={post.href} className='mt-2 block'>
              <p className='prose text-xl font-semibold dark:prose-invert'>
                {post.title}
              </p>
              <p className='prose mt-3 text-base dark:prose-invert'>
                {post.excerpt}
              </p>
            </a>
          </div>
          <div className='mt-6 flex items-center'>
            <div className='flex-shrink-0'>
              <span className='sr-only'>Oli</span>
              <Image
                className='rounded-full'
                src={post.author?.picture?.url}
                alt=''
                objectFit='cover'
                width='45px'
                height='45px'
              />
            </div>
            <div className='ml-3'>
              <p className='prose text-sm font-medium dark:prose-invert'>
                {post.author?.name}
              </p>
              <div className='prose flex space-x-1 text-sm'>
                <DateComponent dateString={post.date} />
                <span className='prose dark:prose-invert' aria-hidden='true'>
                  &middot;
                </span>
                <span className='prose dark:prose-invert'>
                  {post.readTime}m read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
