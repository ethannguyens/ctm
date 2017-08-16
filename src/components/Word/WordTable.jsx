import React from 'react';
import WordRow from './WordRow';

const WordTable = ({words}) => {
  return (
    <table className="wordPrimeTable">
      <thead>
        <tr>
          <th>Word</th>
          <th>Count</th>
          <th>Prime</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  )
};

export default WordTable;
