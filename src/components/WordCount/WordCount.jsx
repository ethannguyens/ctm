import React from 'react';
import ReadFile from '../../modules/read-file';

class WordCount extends React.Component {
  constructor() {
    super();
    console.log(new ReadFile('../../../test.txt'));
  }

  render() {
    return (
      "WordCount Comp"
    )
  }
}

export default WordCount;
