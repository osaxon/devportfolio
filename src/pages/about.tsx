import { motion } from 'framer-motion';
import React from 'react';

import AboutSection from '@/components/layout/AboutSection';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const about = () => {
  return (
    <Layout>
      <Seo title='about page' />
      <main className='dark:bg-zinc-800'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25,
            },
          }}
          exit={{ opacity: 0, y: -50 }}
        >
          <AboutSection />
        </motion.div>
      </main>
    </Layout>
  );
};

export default about;
