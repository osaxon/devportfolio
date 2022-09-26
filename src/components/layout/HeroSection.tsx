import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

import Button from '@/components/buttons/Button';
import SvgElem from '@/components/SvgElem';

const HeroSection = () => {
  return (
    <section className='flex min-h-screen flex-col justify-center'>
      <article className='layout z-50'>
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
        >
          <h1 className='text-2xl md:text-4xl xl:text-5xl'>
            Hello there{' '}
            <span role='img' aria-label='waving hand' className='h-2'>
              👋
            </span>
          </h1>
          <h2 className='mt-1 text-3xl md:text-5xl xl:text-6xl'>
            My name&apos;s Oliver
          </h2>

          <p className='mt-4 max-w-4xl md:mt-6 md:text-lg'>
            I&apos;m a freelance web developer specialising in React and Next.JS
          </p>
          <div className='mt-6 flex flex-wrap gap-4'>
            <Link href='mailto:oliverrsaxon@gmail.com'>
              <Button variant='custom'>Get in touch</Button>
            </Link>
            <Link href='/about'>
              <Button className='transition-all' variant='custom'>
                Read more
              </Button>
            </Link>
          </div>
          <div className='mt-4 flex w-1/3 flex-wrap gap-4 gap-y-2 md:mt-8'>
            <a
              className='inline-flex items-center gap-1 text-sm font-medium md:text-base'
              target='_blank'
              rel='noopener noreferrer'
              href='https://shorturl.at/fr369'
            >
              <CgFileDocument className='text-zinc-500' />
              <p className='text-sm text-zinc-500'>CV</p>
            </a>

            <a
              className='inline-flex items-center gap-1 text-sm font-medium md:text-base'
              target='_blank'
              rel='noopener noreferrer'
              href='https://shorturl.at/fr369'
            >
              <AiFillGithub className='text-zinc-500' />
              <p className='text-sm text-zinc-500'>osaxon</p>
            </a>
          </div>
        </motion.div>
      </article>

      <SvgElem className='ark:opacity-50 absolute bottom-0 right-6 z-0 w-[calc(100%-3rem)] transform-gpu fill-teal-600 opacity-25 dark:fill-rose-700 md:w-[600px] ' />
    </section>
  );
};

export default HeroSection;
