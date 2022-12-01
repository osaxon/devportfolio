import Image from 'next/future/image';
import React from 'react';

import DateComponent from './DateComponent';

const PostAuthor = ({ post }) => {
  return (
    <div className='flex items-center border-b p-2'>
      <div className='relative h-12 w-12 max-w-full flex-shrink-0 overflow-hidden rounded-full'>
        <Image
          className='object-middle object-cover'
          src={post.author?.picture?.url}
          alt=''
          fill
        />
      </div>
      <div className='ml-3 flex items-center gap-4'>
        <p className='prose-lg prose font-medium'>{post.author?.name}</p>
        <div className='prose flex space-x-1 text-sm'>
          <DateComponent dateString={post.date} />
          <span className='prose' aria-hidden='true'>
            &middot;
          </span>
          <span className='prose'>{post.readTime}m read</span>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
