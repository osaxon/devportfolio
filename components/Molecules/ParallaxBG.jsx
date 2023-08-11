'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { SquareA, SquareB, SquareC } from '../Atoms';

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
    <div className='absolute h-screen w-full'>
      <motion.div className='absolute'>
        <SquareA className='fill-secondary stroke-base-300' />
      </motion.div>

      <motion.div
        style={{ translateY: spring, rotate, translateX: x }}
        transition={{ type: 'spring' }}
        className='absolute'
      >
        <SquareB className='fill-accent stroke-base-300' />
      </motion.div>
    </div>
  );
};

export default ParallaxBG;
