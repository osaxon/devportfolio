import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Post = ({ post }) => {
  return (
    <Link href={`posts/${post.slug}`}>
      <a>
        <div className='flex flex-col'>
          <Image
            alt='blog image'
            src={post.coverImage.url}
            width={post.coverImage.width}
            height={post.coverImage.height}
          />
          <h4 className=''>{post.title}</h4>
        </div>
      </a>
    </Link>
  );
};
