import * as React from 'react';

import HeroSection from '@/components/layout/HeroSection';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='dark:bg-zinc-800'>
        <HeroSection />
      </main>
    </Layout>
  );
}
