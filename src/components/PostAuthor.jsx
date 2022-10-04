import Image from 'next/future/image';
import React from 'react';

import DateComponent from './DateComponent';

const PostAuthor = ({ post }) => {
  return (
    <div className='mt-2 flex items-center border-t pb-2 pt-4'>
      <div className='relative h-16 w-16 max-w-full flex-shrink-0 overflow-hidden rounded-full'>
        <span className='sr-only'>Oli</span>
        <Image
          className='object-middle object-cover'
          src={post.author?.picture?.url}
          alt=''
          fill
        />
      </div>
      <div className='ml-3'>
        <p className='prose prose-lg font-medium dark:prose-invert'>
          {post.author?.name}
        </p>
        <div className='prose flex space-x-1 text-sm'>
          <DateComponent dateString={post.date} />
          <span
            className='prose prose-zinc dark:prose-invert'
            aria-hidden='true'
          >
            &middot;
          </span>
          <span className='prose dark:prose-invert'>{post.readTime}m read</span>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
