import React from 'react';

const SkillCard = ({ name, desc, children, skills }) => {
  return (
    <aside className='flex h-full flex-col items-center justify-between rounded-[1px] border-4 border-secondary bg-base-100 p-3'>
      <div className='flex flex-col items-center'>
        {children}
        <h3>{name}</h3>
      </div>
      <div className='flex h-full flex-col justify-between'>
        <p className='sm:text-md h-full whitespace-pre-wrap border-b py-2 text-justify text-xl'>
          {desc}
        </p>
        <p className='mt-2 font-mono text-lg text-primary-focus'>
          {skills.join(', ')}
        </p>
      </div>
    </aside>
  );
};

export default SkillCard;
