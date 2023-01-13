import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from 'next/link';
import Image from 'next/image';
import { LinkExternal } from '../Atoms';

const Project = ({ project }) => {
  const {name, shortDescription, description, coverImage, tags, url, content, slug} = project
  return (
    <div className="card rounded-sm w-full bg-base-100 shadow-xl h-full">
      <figure className='relative h-44'><Image src={coverImage} alt={`Cover image foblog post ${name}`} fill className='object-cover absolute' /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>
        <div className="card-actions justify-end">
        <Link href={`/blog/${slug}`} className="btn btn-sm">More info</Link>
        <LinkExternal href={url}>Try</LinkExternal>
      </div>
    </div>
  </div>
  );
};

export default Project;
