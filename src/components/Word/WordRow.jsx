import React from 'react';

const WordRow = ({word, count, prime}) => {
  return (
    <tr>
      <td>{word}</td>
      <td>{count}</td> 
      <td>{prime.toString()}</td>
    </tr>
  )
};

export default WordRow;
