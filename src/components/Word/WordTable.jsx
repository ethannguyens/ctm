import React from 'react';

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
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{words[key].count}</td>
              <td>{words[key].prime.toString()}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
};

export default WordTable;
