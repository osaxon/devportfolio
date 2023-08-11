import { Project } from '../Molecules';

export default function Projects({ projects }) {
  return (
    <section className='bg-base z-50 min-h-screen bg-base-100 bg-texture-bg py-10'>
      <div className='layout'>
        <h2 className='relative z-50 py-4 text-5xl'>Featured Projects</h2>
        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {projects &&
            projects.map((p) => (
              <li key={p.slug}>
                <Project project={p} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
