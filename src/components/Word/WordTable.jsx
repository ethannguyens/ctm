import React from 'react';
import WordRow from './WordRow';

const WordTable = ({words}) => {
  return (
  <table className="wordPrimeTable">
    <tr>
      <th>Word</th>
      <th>Count</th>
      <th>Prime</th>
    </tr>
    {
      Object.keys(words).map(key => {
        return <WordRow
          key={key}
          word={key}
          count={words[key].count}
          prime={words[key].prime}
          />
      })
    }
  </table>
  )
};

export default WordTable;
