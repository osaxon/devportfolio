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
  const y = useTransform(scrollY, [0, 150], ['0%', '200%']);
  const spring = useSpring(scrollY, {
    stiffness: 100,
    damping: 10,
  });

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo title='Oli Saxon | freelance developer' />

      <main className='from-base bg-gradient-to-b to-transparent'>
        <div className='layout relative'>
          <section className='absolute -z-50 min-h-screen w-screen overflow-x-hidden'>
            <motion.div
              className='absolute top-10 left-[2rem] min-h-[calc(100vh-3rem)] overflow-hidden'
              style={{ translateY: spring }}
            >
              <TopSVG className='fill-accent stroke-base-300 opacity-80' />
            </motion.div>
            <motion.div
              style={{ translateX: spring, translateY: spring }}
              className='absolute left-[2rem] top-10 -z-50 min-h-[calc(100vh-3rem)]'
            >
              <BottomSVG className='fill-secondary stroke-base-300 opacity-80' />
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
