import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const CTALinks = () => {
  return (
    <>
      <div className='mt-6 flex flex-wrap gap-4'>
        <Link href='/about'>
          <button className='btn transition-all'>Read more about me</button>
        </Link>
      </div>
      <div className='mt-4 inline-flex gap-4'>
        <a
          className='inline-flex items-center gap-1 no-underline'
          target='_blank'
          rel='noopener noreferrer'
          href='https://docs.google.com/document/d/1j8rLxp61srn3urbF-FEWtpP9aufnbbd_/edit?usp=sharing&ouid=116781951992424605836&rtpof=true&sd=true'
        >
          <CgFileDocument className='h-6 w-6' />
          CV
        </a>

        <a
          className='inline-flex items-center gap-1 no-underline'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.github.com/osaxon/'
        >
          <AiFillGithub className='h-6 w-6' />
          osaxon
        </a>
      </div>
    </>
  );
};

export default CTALinks;
