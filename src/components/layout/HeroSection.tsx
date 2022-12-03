import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { useParallax } from 'react-scroll-parallax';

import SvgElem from '@/components/SvgElem';

const HeroSection = () => {
  const { ref } = useParallax<HTMLDivElement>({
    rotateZ: [240, 360],
    translateY: [0, 70],
    translateX: [-45, 45],
    scale: [0.75, 2.75, 'easeInQuad'],
  });

  return (
    <section className='flex overflow-hidden'>
      <div className='layout relative z-30 min-h-screen'>
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
              My name&apos;s Oliver
            </h2>

            <p className=' mt-4 max-w-4xl md:mt-6 md:text-lg'>
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
        <div
          ref={ref}
          className='absolute left-0 top-10 -z-50  overflow-hidden md:left-80'
        >
          <SvgElem className='transform-gpu fill-accent opacity-80 dark:opacity-50' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
