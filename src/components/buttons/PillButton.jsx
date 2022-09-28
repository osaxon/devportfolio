import React from 'react';

const PillButton = ({ label, value = null, disabled = false, handler }) => {
  return (
    <button
      type='button'
      value={value ? value : null}
      disabled={disabled ? disabled : false}
      onClick={handler}
      className='inline-flex items-center rounded-full border border-transparent bg-zinc-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
    >
      {label}
    </button>
  );
};

export default PillButton;
