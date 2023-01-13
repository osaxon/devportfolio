import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({post}) => {
  const {title, excerpt, coverImage, slug, tags} = post
  return (
    <div className="card rounded-sm w-full bg-base-100 shadow-xl h-full">
      <figure className='relative h-44'><Image src={coverImage} alt={`Cover image foblog post ${title}`} fill className='object-cover absolute' /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{excerpt}</p>
        <div className="card-actions justify-end">
        <Link href={`/blog/${slug}`} className="btn btn-sm">Read</Link>
      </div>
    </div>
  </div>
  )
}

export default Post