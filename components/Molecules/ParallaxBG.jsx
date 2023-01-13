'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { SquareA, SquareB } from '../Atoms';

const ParallaxBG = () => {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 110], {
    clamp: false,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  const spring = useSpring(scrollY, {
    stiffness: 150,
    damping: 15,
    mass: 2,
  });
  return (
    <div className='absolute left-[-9rem] top-[5rem] -z-50 h-[calc(100vh*2)] w-[400px] translate-x-6 rotate-12 @lg:w-full md:top-[3rem]'>
      <motion.div className='absolute md:right-24 lg:right-56'>
        <SquareA className='fill-secondary stroke-base-300 opacity-50' />
      </motion.div>

      <motion.div
        style={{ translateY: spring, rotate, translateX: x }}
        transition={{ type: 'spring' }}
        className='absolute -z-50 md:right-24 lg:right-56'
      >
        <SquareB className='fill-accent stroke-base-300 opacity-50' />
      </motion.div>
    </div>
  );
};

export default ParallaxBG;
