'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { SquareA, SquareB } from '../Atoms';

const ParallaxBG = () => {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 110], {
    clamp: false,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const spring = useSpring(scrollY, {
    stiffness: 150,
    damping: 15,
    mass: 2,
  });
  return (
      <div className='absolute rotate-12 top-[10rem] -z-50 h-[calc(100vh*2)] right-0 md:right-[10rem] lg:right-[20rem] w-[500px] overflow-x-hidden'>
        <motion.div className='absolute top-4'>
          <SquareA className='fill-secondary stroke-base-300 opacity-50' />
        </motion.div>

        <motion.div
          style={{ translateY: spring, rotate, translateX: x }}
          transition={{ type: 'spring' }}
          className='absolute top-4 -z-50 w-[500px]'
        >
          <SquareB className='fill-accent stroke-base-300 opacity-50' />
        </motion.div>
      </div>
  );
};

export default ParallaxBG;
