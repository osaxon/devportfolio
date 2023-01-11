import React from 'react';

import { Project } from '@/components/Molecules';

import client from '../../lib/apolloClient';
import { PROJECTS_QUERY } from '../../lib/queries';

async function getProjectsData() {
  const res = await client.query({
    query: PROJECTS_QUERY,
  });
  const projects = res.data.projects;
  console.log(res);
  return projects;
}

const Projects = async () => {
  const projects = await getProjectsData();
  return (
    <section className='bg-base z-50 min-h-screen border bg-base-100'>
      <div className='layout'>
        <h2 className='text-center'>Projects</h2>
        <ul className='flex flex-col gap-4'>
          {projects &&
            projects.map((p) => (
              <React.Fragment key={p.slug}>
                <Project project={p} />
              </React.Fragment>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
