import Link from 'next/link';
import React from 'react';
import { BiBrain } from 'react-icons/bi';
import { FaFigma } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { RiRoadMapLine } from 'react-icons/ri';

import SkillCard from '@/components/SkillCard';

const skills = [
  {
    name: 'Web Design',
    desc: 'Design beautiful websites',
    icon: FaFigma,
  },
  {
    name: 'Ideas',
    desc: 'Turn your ideas into a business',
    icon: BiBrain,
  },
  {
    name: 'Team',
    desc: 'Team management',
    icon: IoIosPeople,
  },
  {
    name: 'Product Management',
    desc: 'Define product roadmap strategy and vision',
    icon: RiRoadMapLine,
  },
];

const SkillsSection = () => {
  return (
    <section
      id='skills'
      className='flex min-h-screen bg-secondary bg-opacity-50 py-10'
    >
      <div className='layout flex flex-col items-center'>
        <h2 className='text-5xl'>Skills</h2>
        <div className='mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
          {skills &&
            skills.map((skill) => (
              <div key={skill.name}>
                <SkillCard name={skill.name} desc={skill.desc}>
                  <skill.icon className='fill-primary' size={70} />
                </SkillCard>
              </div>
            ))}
        </div>
        <Link href='/projects'>
          <a className='btn-secondary btn-wide btn mt-8'>Past Projects</a>
        </Link>
      </div>
    </section>
  );
};

export default SkillsSection;
