const SkillCard = ({ name, desc, children, skills }) => {
  return (
    <aside className='flex h-full flex-col items-center justify-between rounded-[1px] border-4 border-secondary bg-base-100 p-4 p-2'>
      <div className='flex flex-col items-center'>
        {children}
        <h3>{name}</h3>
      </div>
      <div className='flex h-full flex-col justify-between p-2'>
        <p className='lg:text-md h-full py-2 text-xl font-semibold'>{desc}</p>
        <ul className='columns-2 text-xl md:text-lg'>
          {skills.length > 0
            ? skills.map((s) => (
                <li
                  className='font-mono text-primary transition-colors'
                  key={s}
                >
                  {s}
                </li>
              ))
            : null}
        </ul>
      </div>
    </aside>
  );
};

export default SkillCard;
