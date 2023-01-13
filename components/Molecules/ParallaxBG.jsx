'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { SquareA, SquareB } from '../Atoms';

const ParallaxBG = () => {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 110], {
    clamp: false,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0px', '200px']);
  const spring = useSpring(scrollY, {
    stiffness: 150,
    damping: 15,
    mass: 2,
  });
  return (
    <div className='absolute -z-50 h-[calc(100vh*2)] w-full overflow-y-hidden'>
      <motion.div className='absolute top-10 sm:left-20 md:left-auto md:right-24 lg:right-56'>
        <SquareA className=' fill-secondary stroke-base-300 opacity-50' />
      </motion.div>

      <motion.div
        style={{ translateY: spring, rotate, translateX: x }}
        transition={{ type: 'spring' }}
        className='absolute top-10 -z-50 sm:left-20 md:right-24 md:left-auto lg:right-56'
      >
        <SquareB className='fill-accent stroke-base-300 opacity-50' />
      </motion.div>
    </div>
  );
};

export default ParallaxBG;
