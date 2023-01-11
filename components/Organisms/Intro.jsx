'use client';
import { motion } from 'framer-motion';

import { ParallaxBG } from '../Molecules';
import { CTALinks } from '../Molecules';

const Intro = () => {
  return (
    <section className='layout'>
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
        <div className='py-20'>
          <h1 className='text-5xl md:text-5xl xl:text-6xl'>Hello there </h1>
          <h2 className='mt-1 text-4xl md:text-5xl xl:text-6xl'>
            My name&apos;s Oli
          </h2>
        </div>

        <div>
          <p className='mt-4 max-w-4xl text-2xl md:mt-6 md:text-3xl'>
            Frontend web developer specialising in React.
          </p>
          <CTALinks />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
