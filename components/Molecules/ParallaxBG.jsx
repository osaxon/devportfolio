'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { SquareA, SquareB } from '../Atoms';

const ParallaxBG = () => {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 110], {
    clamp: false,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const spring = useSpring(scrollY, {
    stiffness: 150,
    damping: 15,
    mass: 2,
  });
  return (
    <div className='relative -z-50'>
      <div className='absolute -z-50 h-[calc(100vh*2.5)] w-full overflow-x-hidden'>
        <motion.div className='absolute left-4 top-[3rem] min-h-[calc(100vh-3rem)] w-full md:right-0'>
          <SquareA className='fill-secondary stroke-base-300 opacity-50' />
        </motion.div>

        <motion.div
          style={{ translateY: spring, rotate, translateX: x }}
          transition={{ type: 'spring' }}
          className='absolute top-[3rem] left-4 -z-50 min-h-[calc(100vh-3rem)] w-full'
        >
          <SquareB className='fill-accent stroke-base-300 opacity-50' />
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxBG;
