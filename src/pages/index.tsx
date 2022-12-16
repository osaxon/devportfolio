import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

import BottomSVG from '@/components/BottomSVG';
import { ContactForm } from '@/components/ContactForm';
import HeroSection from '@/components/layout/HeroSection';
import Layout from '@/components/layout/Layout';
import SkillsSection from '@/components/layout/SkillsSection';
import Seo from '@/components/Seo';
import TopSVG from '@/components/TopSVG';

export default function HomePage() {
  const { scrollY } = useScroll();
  const scrollRef = useRef(null);
  const translateX = useSpring(scrollY, {
    stiffness: 100,
    damping: 10,
  });
  const translateY = useSpring(scrollY, {
    stiffness: 100,
    damping: 10,
  });

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo title='Oli Saxon | freelance developer' />

      <main className='from-base bg-gradient-to-b to-transparent'>
        <div ref={scrollRef} className='layout relative'>
          <div className='absolute h-screen border'>
            <motion.div
              viewport={{ root: scrollRef }}
              style={{ translateX: translateX, translateY: translateY }}
            >
              <div className='absolute'>
                <TopSVG />
              </div>
            </motion.div>
            <motion.div
              viewport={{ root: scrollRef }}
              style={{ translateY: translateY }}
            >
              <div className='absolute'>
                <BottomSVG />
              </div>
            </motion.div>
          </div>
        </div>
        <HeroSection />
        <SkillsSection />
        <ContactForm />
      </main>
    </Layout>
  );
}
