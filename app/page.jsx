import { Intro, Projects, Skills } from '@/components/Organisms'

import client from '../lib/apolloClient';
import { PROJECTS_QUERY } from '../lib/queries';

async function getProjectsData() {
  const res = await client.query({
    query: PROJECTS_QUERY,
  });
  const projects = res.data.projects;
  return projects;
}

export default async function Page() {
  const projects = await getProjectsData();
  return (
    <main>
      <Intro />
      <Skills />
      <Projects projects={projects} />
    </main>
  )
}
