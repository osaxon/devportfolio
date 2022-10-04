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
      <div className='flex h-full min-h-[550px] flex-col rounded-sm bg-zinc-50 shadow-lg dark:bg-zinc-600/50'>
        <div className='relative h-[350px] max-w-full overflow-hidden md:h-[220px]'>
          <Image alt='' src={image} fill className=' w-full object-cover' />
        </div>
        <div className='flex flex-1 flex-col justify-between p-6'>
          <div className='flex-1'>
            <ul className='flex gap-1'>
              {tags &&
                tags.map((tag) => (
                  <li key={tag}>
                    <span className='prose inline-flex items-center rounded-full border-transparent bg-zinc-600/75 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-zinc-700/75 disabled:opacity-25'>
                      {tag}
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
          <PostAuthor post={post} />
        </div>
      </div>
    </Link>
  );
};
