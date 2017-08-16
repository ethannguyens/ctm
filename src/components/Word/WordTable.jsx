import React from 'react';

const WordTable = ({words}) => {
  return (
    <table className="wordPrimeTable">
      <caption>Word Count and Prime</caption>
      <thead>
      <tr className="Grid">
        <th className="Grid-cell">Word</th>
        <th className="Grid-cell">Count</th>
        <th className="Grid-cell">Prime</th>
      </tr>
      </thead>
      <tbody>
      {
        Object.keys(words).map(key => {
          return (
            <tr className="Grid" key={key}>
              <td className="Grid-cell">{key}</td>
              <td className="Grid-cell">{words[key].count}</td>
              <td className="Grid-cell">{words[key].prime.toString()}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
};

export default WordTable;
