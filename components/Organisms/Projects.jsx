import { Project } from '../Molecules';

export default function Projects ({projects}) {
  return (
    <section className='bg-base z-50 min-h-screen bg-base-100 py-10 bg-texture-bg'>
      <div className='layout'>
        <h2 className='text-5xl py-4'>Featured Projects</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {projects &&
            projects.map((p) => (
              <li key={p.slug}>
                <Project project={p}/>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
