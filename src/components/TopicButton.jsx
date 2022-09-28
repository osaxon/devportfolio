import React from 'react';

const TopicButton = ({ topic, handler = null }) => {
  return (
    <button
      value={topic.slug}
      onClick={handler ? handler : null}
      className='rounded-full bg-zinc-200 px-4 py-1 text-xs text-zinc-900 dark:bg-zinc-600 dark:text-zinc-50'
    >
      {topic.name}
    </button>
  );
};

export default TopicButton;
