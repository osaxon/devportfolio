import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import TopicButton from './TopicButton';

export const Post = ({ post }) => {
  const topics = post.topics;

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
            <ul className='mt-2 flex flex-wrap items-center justify-start gap-2 align-middle'>
              {topics &&
                topics.map((topic) => (
                  <li key={topic.slug}>
                    <TopicButton topic={topic} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </a>
    </Link>
  );
};
