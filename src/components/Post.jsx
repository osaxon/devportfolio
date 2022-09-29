import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import DateComponent from './DateComponent';
import { buildImage } from '../lib/cloudinary';

export const Post = ({ post }) => {
  const coverImageURL = buildImage(post.coverImage.public_id)
    .resize('w_600,h_400')
    .toURL();

  const topics = post.topics;
  return (
    <Link href={`posts/${post.slug}`}>
      <div className='flex h-full flex-col overflow-hidden rounded-sm shadow-lg'>
        <div className='relative flex-shrink-0'>
          <Image
            height={400}
            width={600}
            src={coverImageURL}
            alt=''
            priority={true}
            objectFit='contain'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between p-6'>
          <div className='flex-1'>
            <ul className='flex gap-1'>
              {topics &&
                topics.map((topic) => (
                  <li key={topic.slug}>
                    <span className='inline-flex items-center rounded-full border-transparent bg-zinc-600/75 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-zinc-700/75     disabled:opacity-25'>
                      {topic.name}
                    </span>
                  </li>
                ))}
            </ul>
            <a href={post.href} className='mt-2 block'>
              <p className='text-xl font-semibold text-gray-900'>
                {post.title}
              </p>
              <p className='mt-3 text-base text-gray-500'>{post.excerpt}</p>
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
              <p className='text-sm font-medium text-gray-900'>
                {post.author?.name}
              </p>
              <div className='flex space-x-1 text-sm text-gray-500'>
                <DateComponent dateString={post.date} />
                <span aria-hidden='true'>&middot;</span>
                <span>{post.readTime}m read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
