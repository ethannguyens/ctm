import React from 'react';
import WordTable from './WordTable';



class WordCountPage extends React.Component {
  constructor() {
    super();
    this.sample = { hello: { count: 3, prime: true },
      everybody: { count: 1, prime: true },
      this: { count: 1, prime: true },
      is: { count: 1, prime: true },
      a: { count: 1, prime: true },
      test: { count: 1, prime: true },
      file: { count: 1, prime: true },
      again: { count: 1, prime: true } };
  }

  render() {
    return (
      <WordTable
        words={this.sample}
      />
    )
  }
}

export default WordCountPage;
