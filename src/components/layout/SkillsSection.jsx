import Link from 'next/link';
import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { IoIosAnalytics } from 'react-icons/io';

import SkillCard from '@/components/SkillCard';

const skills = [
  {
    name: 'Design & Build',
    desc: 'All aspects of web development from design to deployment',
    icon: FaFigma,
  },
  {
    name: 'Support',
    desc: 'Support and collobaration for your site or web app',
    icon: FaHandsHelping,
  },
  {
    name: 'Analytics',
    desc: 'Use analytics tools to monitor your sites traffic and performance',
    icon: IoIosAnalytics,
  },
];

const SkillsSection = () => {
  return (
    <section
      id='skills'
      className='flex min-h-[calc(100vh-15rem)] border-y-2 bg-neutral bg-opacity-75 py-10'
    >
      <div className='layout flex flex-col items-center'>
        <h2 className='text-5xl'>Skills</h2>
        <div className='mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-3'>
          {skills &&
            skills.map((skill) => (
              <div key={skill.name}>
                <SkillCard name={skill.name} desc={skill.desc}>
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
