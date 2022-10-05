import { gql } from '@apollo/client';
import React from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Project from '../components/Project';
import client from '../lib/apolloClient';

const projects = ({ projects }) => {
  const evenNum = projects.length % 2 === 0;
  return (
    <Layout>
      <Seo title='projects' />
      <main className=' dark:bg-zinc-800'>
        <section className='min-h-[calc(100vh-3.5rem)]'>
          <div className='layout py-10'>
            <h1 className='prose prose-2xl'>Projects</h1>
            <ul className='grid grid-cols-1 gap-1 md:grid-cols-3'>
              {projects &&
                projects.map((project, index) => (
                  <li
                    className={clsxm('cursor-pointer', [
                      !evenNum && ['w-full md:first:col-span-3'],

                      index === 2 && !evenNum && ['md:col-span-2'],
                      index === 3 && !evenNum && ['md:col-span-2'],
                      evenNum && [
                        'w-full md:first:col-span-2 md:last:col-span-2',
                      ],
                    ])}
                    key={project.slug}
                  >
                    <Project index={index} project={project} />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query MyProjectsQuery {
        projects(orderBy: publishedAt_DESC) {
          name
          slug
          coverImage
          shortDescription
          tags
          url
        }
      }
    `,
  });
  const projects = data.data.projects;

  return {
    props: {
      projects,
    },
  };
}

export default projects;
