import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';

import PostAuthor from './PostAuthor';
import { buildImage } from '../lib/cloudinary';

export const Post = ({ post }) => {
  const image = buildImage(post.coverImage.public_id).toURL();
  const tags = post.tags;
  return (
    <Link href={`posts/${post.slug}`}>
      <div className='h-full'>
        <PostAuthor post={post} />
        <ul className='flex gap-1'>
          {tags &&
            tags.map((tag) => (
              <li key={tag}>
                <span className='badge disabled:opacity-25'>{tag}</span>
              </li>
            ))}
        </ul>
        <div className='flex w-full flex-row items-center justify-between'>
          <p className='text-2xl font-semibold'>{post.title}</p>
          <div className='relative h-20 w-20 flex-shrink-0 md:h-32 md:w-32'>
            <Image
              alt=''
              fill
              className='object-cover'
              src={image}
              sizes='(max-width: 768px) 128px, 80px'
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
