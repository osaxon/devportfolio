import { gql } from '@apollo/client';
import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import TableRow from '../components/TableRow';
import client from '../lib/apolloClient';

const projects = ({ projects }) => {
  return (
    <Layout>
      <Seo title='Oli Saxon | Projects' />
      <main className='bg-texture-bg'>
        <section className='min-h-screen'>
          <div className='layout pt-20'>
            <h1>Projects</h1>
            <div className='my-10 flex flex-col bg-base-100'>
              <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                  <div className='overflow-x-auto'>
                    <table className='min-w-full'>
                      <thead className='border-b'>
                        <tr>
                          <th
                            scope='col'
                            className='px-6 py-4 text-left text-sm font-medium'
                          >
                            Name
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-4 text-left text-sm font-medium'
                          >
                            Desc
                          </th>
                          <th
                            scope='col'
                            className='hidden px-6 py-4 text-left text-sm font-medium md:block'
                          >
                            Tags
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects &&
                          projects.map((project, i) => (
                            <tr key={project.name} className='border-b'>
                              <TableRow
                                name={project.name}
                                desc={project.shortDescription}
                                tech={project.tags}
                              />
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
