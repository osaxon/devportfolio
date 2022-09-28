import React from 'react';

const TopicButton = ({ topic, handler = null, disabled = false }) => {
  return (
    <button
      value={topic.slug}
      disabled={disabled}
      onClick={handler ? handler : null}
      className='rounded-full bg-zinc-200 px-4 py-1 text-xs text-zinc-900 disabled:bg-zinc-600 dark:bg-zinc-600 dark:text-zinc-50 disabled:dark:bg-zinc-200'
    >
      {topic.name}
    </button>
  );
};

export default TopicButton;
