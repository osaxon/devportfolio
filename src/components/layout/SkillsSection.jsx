import Link from 'next/link';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { IoIosAnalytics } from 'react-icons/io';

import SkillCard from '@/components/SkillCard';

const skills = [
  {
    name: 'Frontend',
    desc: 'Good understanding of core frontend technologies and programming concepts.',
    icon: FaReact,
    skills: ['HTML, JavaScript & CSS', 'React', 'Next.JS', 'GraphQL'],
  },
  {
    name: 'Backend',
    desc: 'Experience with working on backend and full stack projects.',
    icon: FaHandsHelping,
    skills: ['Node', 'MySQL', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    name: 'Other',
    desc: 'Use analytics tools to monitor your sites traffic and performance',
    icon: IoIosAnalytics,
    skills: ['Git', 'Jira', 'Stripe API', 'Agile & Scrum'],
  },
];

const SkillsSection = () => {
  return (
    <section
      id='skills'
      className='z-50 flex min-h-[calc(100vh-15rem)] border-y-2 bg-opacity-50 bg-texture-bg py-10 backdrop-blur-lg'
    >
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

        <div className='mt-10 flex w-full flex-col items-center border-opacity-50'>
          <div className='divider' />
          <Link href='/projects'>
            <a className='btn-wide btn mt-8 shadow-lg'>Past Projects</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
