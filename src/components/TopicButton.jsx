import React from 'react';

const TopicButton = ({ topic, handler = null, disabled = false }) => {
  return (
    <button
      value={topic.slug}
      disabled={disabled}
      onClick={handler ? handler : null}
      className='h-[24.5px] rounded-full bg-zinc-800/50 px-2 text-xs text-zinc-50 disabled:bg-zinc-600 dark:bg-zinc-600 dark:text-zinc-50 disabled:dark:bg-zinc-200'
    >
      {topic.name}
    </button>
  );
};

export default TopicButton;
