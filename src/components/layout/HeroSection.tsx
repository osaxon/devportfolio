import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const HeroSection = () => {
  return (
    <section>
      <div className='layout relative min-h-[calc(100vh-3rem)]'>
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
          className='z-50 flex flex-col py-20'
        >
          <div className='flex flex-col'>
            <h1 className='text-5xl md:text-5xl xl:text-6xl'>Hello there </h1>
            <h2 className='mt-1 text-4xl md:text-5xl xl:text-6xl'>
              My name&apos;s Oli
            </h2>

            <p className='mt-4 max-w-4xl text-2xl md:mt-6 md:text-3xl'>
              I&apos;m a freelance web developer specialising in React and
              Next.JS
            </p>
          </div>

          <div>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
