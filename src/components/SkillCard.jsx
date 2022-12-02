import React from 'react';

const SkillCard = ({ name, desc, children }) => {
  return (
    <aside className='flex h-48 flex-col items-center rounded-[1px] border-8 border-accent bg-base-100 p-4'>
      {children}
      <h3>{name}</h3>
      <p className='text-center'>{desc}</p>
    </aside>
  );
};

export default SkillCard;
