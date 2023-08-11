import Link from 'next/link';

import { Post } from '../Molecules';

export default function FeaturedPosts({ posts }) {
  return (
    <section className='bg-base z-50 bg-secondary bg-opacity-50 py-10 backdrop-blur-lg'>
      <div className='layout'>
        <h2 className='z-99 relative py-4 text-5xl'>Featured Posts</h2>
        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {posts &&
            posts.map((p) => (
              <li key={p.slug}>
                <Post post={p} />
              </li>
            ))}
        </ul>
        <div className='flex w-full md:justify-end'>
          <Link className='btn mt-4' href='/blog'>
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
