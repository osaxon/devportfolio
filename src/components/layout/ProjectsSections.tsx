import ArrowLink from '@/components/links/ArrowLink';

const projects = [
  {
    name: 'Blog',
    description: 'Blog build with Next.js & Contentful CMS',
    image:
      'https://res.cloudinary.com/djaiep6vj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1663946907/Images/Me_and_Violetta_qsna4r.png',
  },
  {
    name: 'Plastichem Ltd',
    description: 'Company website built for Plastichem Ltd',
    image:
      'https://res.cloudinary.com/djaiep6vj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1663946907/Images/Me_and_Violetta_qsna4r.png',
  },
  {
    name: 'E-commerce website',
    description:
      'E-commerce website built with Next.js, Commerce.js and Stripe',
    image:
      'https://res.cloudinary.com/djaiep6vj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1663946907/Images/Me_and_Violetta_qsna4r.png',
  },
  {
    name: 'Photography blog',
    description: 'Photography blog site built with Next.js',
    image:
      'https://res.cloudinary.com/djaiep6vj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1663946907/Images/Me_and_Violetta_qsna4r.png',
  },
];

export default function AboutSection() {
  return (
    <section id='projects' className='min-h-screen bg-zinc-50 dark:bg-zinc-700'>
      <div className='layout py-20'>
        <h1>Projects</h1>
        <ul className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {projects &&
            projects.map((project) => (
              <li
                key={project.name}
                className='flex h-48 flex-col justify-between rounded-md border p-4'
              >
                <ArrowLink href={project.image}>
                  <h4>{project.name}</h4>
                </ArrowLink>
                <p>{project.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
