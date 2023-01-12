import { FaReact } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { IoIosAnalytics } from 'react-icons/io';

import { SkillCard } from '../Molecules';

const skills = [
  {
    name: 'Frontend',
    desc: 'Solid understanding of frontend technologies and programming concepts.',
    icon: FaReact,
    skills: ['HTML, JavaScript & CSS', 'React', 'Next.JS', 'GraphQL', 'REST'],
  },
  {
    name: 'Backend',
    desc: 'Experience with working on backend and full stack projects.',
    icon: FaHandsHelping,
    skills: ['Node', 'MySQL', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    name: 'Other',
    desc: 'Broad range of skills developed over 10 years in the tech industry',
    icon: IoIosAnalytics,
    skills: [
      'Git',
      'Jira',
      'Stripe API',
      'AWS',
      'Google Analytics',
      'Agile & Scrum',
    ],
  },
];

const Skills = () => {
  return (
    <section className='x-50 bg-opacity-50 bg-texture-bg backdrop-blur-lg'>
      <div className='layout flex flex-col items-center'>
        <h2 className='text-5xl'>Skills</h2>
        <div className='mt-16 grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          {skills &&
            skills.map((skill) => (
              <div
                className='md:first:col-span-2 lg:first:col-span-1'
                key={skill.name}
              >
                <SkillCard
                  skills={skill.skills}
                  name={skill.name}
                  desc={skill.desc}
                >
                  <skill.icon className='fill-primary' size={70} />
                </SkillCard>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills