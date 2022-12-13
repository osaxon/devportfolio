import Image from 'next/future/image';
import React from 'react';

import DateComponent from './DateComponent';

const PostAuthor = ({ post }) => {
  return (
    <div className='flex items-center border-b p-2'>
      <div className='avatar'>
        <div className='w-12 rounded-full'>
          <Image
            className='object-contain'
            src={post.author?.picture?.url}
            alt=''
            width={48}
            height={48}
          />
        </div>
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
