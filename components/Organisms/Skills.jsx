import { FaReact } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { IoIosAnalytics } from 'react-icons/io';

import { SkillCard } from '../Molecules';

const skills = [
  {
    name: 'Technical',
    desc: 'Solid understanding of modern web technologies and concepts',
    icon: FaReact,
    skills: [
      'HTML, JavaScript & CSS',
      'React',
      'Next.JS',
      'REST',
      'Typescript',
      'Tailwind',
    ],
  },
  {
    name: 'Soft skills',
    desc: 'Self-motivated and passionate about programming.',
    icon: FaHandsHelping,
    skills: ['Problem solver', 'Creative', 'Adaptable', 'Pragmatic'],
  },
];

const Skills = () => {
  return (
    <section className='x-50 bg-opacity-50 bg-texture-bg py-10 backdrop-blur-lg'>
      <div className='layout flex flex-col items-center'>
        <h2 className='text-5xl'>Skills</h2>
        <div className='mt-16 grid w-full grid-cols-1 gap-2 md:grid-cols-2'>
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

export default Skills;
