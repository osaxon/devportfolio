import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Post = ({ post }) => {
  return (
    <Link href={`posts/${post.slug}`}>
      <a className='block h-full rounded-md'>
        <div className='flex flex-col'>
          <Image
            alt='blog image'
            src={post.coverImage.url}
            width={post.coverImage.width}
            height={post.coverImage.height}
          />
          <div className='px-4 py-2'>
            <h4 className=''>{post.title}</h4>
            <p>{post.excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};
