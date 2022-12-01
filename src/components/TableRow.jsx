import React from 'react';

const TableRow = ({ rowNum, name, desc, tech, url }) => {
  return (
    <>
      <td className='cursor-pointer whitespace-pre-wrap px-6 py-4 text-sm font-medium'>
        <a className='link' href={url}>
          {name}
        </a>
      </td>
      <td className='whitespace-pre-wrap px-6 py-4 text-sm font-medium'>
        {desc}
      </td>
      <td className='hidden whitespace-nowrap px-6 py-4 text-sm font-medium md:flex'>
        {tech && tech.map((i) => <p key={i}>&nbsp;{i}</p>)}
      </td>
    </>
  );
};

export default TableRow;
