import React from 'react';

const TableRow = ({ rowNum, name, desc, tech, url }) => {
  return (
    <>
      <th>{rowNum}</th>
      <td>
        <a className='link-accent' href={url}>
          {name}
        </a>
      </td>
      <td>{desc}</td>
      <td>{tech && tech.map((i) => <p key={i}>{i}</p>)}</td>
    </>
  );
};

export default TableRow;
