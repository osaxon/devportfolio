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
      <div className='h-full rounded-sm shadow-lg'>
        <PostAuthor post={post} />
        <div className='flex w-full justify-between'>
          <div className='flex flex-1 flex-col justify-between p-4'>
            <div className='flex-1'>
              <a href={post.href} className='my-2 block'>
                <p className='prose text-2xl font-semibold'>{post.title}</p>
                <p className='prose mt-3 text-base'>{post.excerpt}</p>
              </a>
            </div>
            <ul className='flex gap-1'>
              {tags &&
                tags.map((tag) => (
                  <li key={tag}>
                    <span className='badge disabled:opacity-25'>{tag}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className='relative m-4 h-28 w-28 overflow-hidden md:h-36 md:w-36'>
            <Image alt='' src={image} fill className=' w-full object-cover' />
          </div>
        </div>
      </div>
    </Link>
  );
};
