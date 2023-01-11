import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const CTALinks = () => {
  return (
    <>
      <div className='mt-6 flex flex-wrap gap-4'>
        <Link href='mailto:oliverrsaxon@gmail.com'>
          <button className='btn'>Get in touch</button>
        </Link>
        <Link href='/about'>
          <button className='btn transition-all'>Read more</button>
        </Link>
      </div>
      <div className='mt-4 inline-flex gap-4'>
        <a
          className='inline-flex items-center gap-1 no-underline'
          target='_blank'
          rel='noopener noreferrer'
          href='https://shorturl.at/fr369'
        >
          <CgFileDocument className='h-6 w-6' />
          CV
        </a>

        <a
          className='inline-flex items-center gap-1 no-underline'
          target='_blank'
          rel='noopener noreferrer'
          href='https://shorturl.at/fr369'
        >
          <AiFillGithub className='h-6 w-6' />
          osaxon
        </a>
      </div>
    </>
  );
};

export default CTALinks;
