import { FeaturedPosts, Intro, Projects, Skills } from '@/components/Organisms';

import client from '../lib/apolloClient';
import { getFeaturedPosts, getFeaturedProjects } from '../lib/queries';

// async function getProjects() {
//   const res = await client.query({
//     query: PROJECTS_QUERY,
//   });
//   const projects = res.data.projects;
//   return projects;
// }

export default async function Page() {
  const projects = await getFeaturedProjects();
  const posts = await getFeaturedPosts();
  return (
    <main>
      <Intro />
      <Skills />
      <Projects projects={projects} />
    </main>
  );
}

export const revalidate = 60;
