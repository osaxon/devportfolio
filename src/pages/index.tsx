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
    stiffness: 50,
    damping: 10,
    restDelta: 0.001,
  });
  const translateY = useSpring(scrollY, {
    stiffness: 50,
    damping: 10,
    restDelta: 0.001,
  });

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo title='Oli Saxon | freelance developer' />

      <main className='from-base bg-gradient-to-b to-transparent'>
        <div ref={scrollRef} className='layout relative top-10'>
          <TopSVG className='absolute top-10 scale-90 fill-secondary md:scale-100' />
          <motion.div
            viewport={{ root: scrollRef }}
            style={{ translateX: translateX, translateY: translateY }}
          >
            <div className='absolute h-[calc(100vh-3rem)]'>
              <BottomSVG className='absolute top-10 scale-90 fill-primary opacity-75 md:scale-100' />
            </div>
          </motion.div>
        </div>
        <HeroSection />
        <SkillsSection />
        <ContactForm />
      </main>
    </Layout>
  );
}
