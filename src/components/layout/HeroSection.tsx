import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

import SvgElem from '@/components/SvgElem';

const HeroSection = () => {
  return (
    <section className='flex min-h-screen'>
      <div className='layout z-300 relative'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25,
            },
          }}
          exit={{ opacity: 0, y: -50 }}
          className='z-50 flex h-full flex-col justify-center'
        >
          <div className='flex flex-col'>
            <h1 className='text-2xl md:text-4xl xl:text-5xl'>Hello there </h1>
            <h2 className='mt-1 text-3xl md:text-5xl xl:text-6xl'>
              My name&apos;s Oliver
            </h2>

            <p className=' mt-4 max-w-4xl md:mt-6 md:text-lg'>
              I&apos;m a freelance web developer specialising in React and
              Next.JS
            </p>
          </div>

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
        </motion.div>
        <SvgElem className=' absolute bottom-6 right-2 -z-50 w-[calc(100%-1rem)] rotate-6 transform-gpu fill-secondary dark:opacity-50 md:right-10 md:w-[600px]' />
      </div>
    </section>
  );
};

export default HeroSection;
