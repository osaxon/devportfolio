import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';

import { buildImage } from '../lib/cloudinary';

const Project = ({ project }) => {
  const image = buildImage(project.coverImage.public_id).toURL();
  return (
    <Link href={project.url ? project.url : '/'}>
      <div className='group flex h-full flex-col rounded-sm'>
        <div className='relative flex h-96 items-center justify-center overflow-hidden md:h-[550px]'>
          <Image
            alt={`cover image for project: ${project.name}`}
            src={image}
            fill
            className='w-full rounded-sm object-cover transition-all group-hover:scale-105  group-hover:opacity-60'
          />
          <article className='prose prose-violet relative flex flex-col text-center dark:prose-invert'>
            <h1 className='z-50 text-3xl'>{project.name}</h1>
            <p>{project.shortDescription}</p>
          </article>
        </div>
      </div>
    </Link>
  );
};

export default Project;
