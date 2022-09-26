import React from 'react';

import Layout from '@/components/layout/Layout';
import ProjectsSection from '@/components/layout/ProjectsSections';
import Seo from '@/components/Seo';

const projects = () => {
  return (
    <Layout>
      <Seo title='about page' />
      <main className='bg-zinc-50 dark:bg-zinc-800'>
        <ProjectsSection />
      </main>
    </Layout>
  );
};

export default projects;
