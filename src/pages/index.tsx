import * as React from 'react';

import { ContactForm } from '@/components/ContactForm';
import HeroSection from '@/components/layout/HeroSection';
import Layout from '@/components/layout/Layout';
import SkillsSection from '@/components/layout/SkillsSection';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo title='Oli Saxon | freelance developer' />

      <main className='bg-texture-bg'>
        <HeroSection />
        <SkillsSection />
        <ContactForm />
      </main>
    </Layout>
  );
}
