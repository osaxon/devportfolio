'use client';
import { motion } from 'framer-motion';

import { ParallaxBG } from '../Molecules';
import { CTALinks } from '../Molecules';

const Intro = () => {
  return (
    <section className='layout min-h-[calc(100vh-5rem)] @container'>
      <ParallaxBG />
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
        <div className=''>
          <h1 className='font-mono text-5xl md:text-5xl xl:text-6xl'>
            Hello there{' '}
          </h1>
          <h2 className='mt-1 text-4xl md:text-5xl xl:text-6xl'>
            My name&apos;s Oli
          </h2>
        </div>

        <div className='mt-8'>
          <p className='max-w-2xl pb-4 font-mono text-2xl md:text-3xl'>
            I&apos;m a frontend web developer specialising in React.
          </p>
          <CTALinks />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
