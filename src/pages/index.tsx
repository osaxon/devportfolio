import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import BottomSVG from '@/components/BottomSVG';
import { ContactForm } from '@/components/ContactForm';
import HeroSection from '@/components/layout/HeroSection';
import Layout from '@/components/layout/Layout';
import SkillsSection from '@/components/layout/SkillsSection';
import Seo from '@/components/Seo';
import TopSVG from '@/components/TopSVG';

export default function HomePage() {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 100], {
    clamp: false,
  });
  const grow = useTransform(scrollYProgress, [0, 1], ['100%', '10%']);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '75%']);
  const spring = useSpring(scrollY, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo title='Oli Saxon | freelance developer' />

      <main className='from-base overflow-hidden bg-gradient-to-b to-transparent'>
        <div className='layout relative -z-50'>
          <section className='absolute -z-50 min-h-screen w-full overflow-x-hidden '>
            <motion.div className='absolute left-4 top-[3rem] min-h-[calc(100vh-3rem)] w-full md:left-60 md:right-0'>
              <TopSVG className='fill-secondary stroke-base-300 opacity-50' />
            </motion.div>

            <motion.div
              style={{ translateY: spring, rotate, translateX: x }}
              transition={{ type: 'spring' }}
              className='absolute top-[3rem] left-4 -z-50 min-h-[calc(100vh-3rem)] w-full md:left-60'
            >
              <BottomSVG className='fill-accent stroke-base-300 opacity-50' />
            </motion.div>
          </section>
        </div>

        <HeroSection />
        <SkillsSection />
        <ContactForm />
      </main>
    </Layout>
  );
}
