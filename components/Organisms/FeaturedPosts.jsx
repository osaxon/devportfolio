import Link from 'next/link'

import { Post } from '../Molecules'

export default function FeaturedPosts({ posts }) {

    return (
        <section className='bg-base z-50 bg-secondary bg-opacity-50 backdrop-blur-lg py-10'>
        <div className='layout'>
          <h2 className='text-5xl py-4'>Featured Posts</h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {posts &&
              posts.map((p) => (
                <li key={p.slug}>
                  <Post post={p} />
                </li>
              ))}
          </ul>
          <div className='flex md:justify-end w-full'>
            <Link className='btn mt-4' href="/blog">Read more</Link>
          </div>
        </div>
      </section>
    )
}