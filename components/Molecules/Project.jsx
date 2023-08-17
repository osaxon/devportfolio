import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

import { LinkExternal } from '../Atoms';

const Project = ({ project }) => {
  const {
    name,
    shortDescription,
    description,
    coverImage,
    tags,
    url,
    content,
    slug,
    moreInfo,
  } = project;
  return (
    <div className='card h-full w-full rounded-sm bg-base-100 shadow-xl'>
      <figure className='relative h-72'>
        <Image
          src={coverImage}
          alt={`Cover image foblog post ${name}`}
          fill
          className='absolute object-cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{shortDescription}</p>
        <div className='card-actions justify-end'>
          {moreInfo && (
            <Link href={`/blog/${slug}`} className='btn-sm btn'>
              More info
            </Link>
          )}
          <LinkExternal href={url}>Try</LinkExternal>
        </div>
      </div>
    </div>
  );
};

export default Project;
