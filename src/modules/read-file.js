const fs = require('fs');

class ReadFile {

  constructor() {
    this.getUniqueWords = this.getUniqueWords.bind(this);
    this.countWords = this.countWords.bind(this);
    this.stream = this.stream.bind(this);
  }

  getUniqueWords(path, option = 'stream', encode = 'utf8') {
    return new Promise((resolve) => {
      switch (option) {
        case 'async':
          console.log('async');
          break;
        case 'sync':
          console.log('sync');
          break;
        default:
          console.log('stream');
          this.stream(path, encode).then(uniqueWords => {
            resolve(uniqueWords);
          })
      }
    });
  }

  countWords(uniqueWords, line) {
    const words = line.match(/(?!\d)(\w+\b)/g, '');

    let word;
    for (let i in words) {
      word = words[i].toLowerCase();
      uniqueWords[word] = uniqueWords[word] ? uniqueWords[word] += 1 : 1;
    }

    return uniqueWords;
  }

  stream(path, encode) {
    return new Promise((resolve) => {
      let self = this;
      let remaining = '';
      let uniqueWords = {};

      fs.createReadStream(path, encode)
        .on('data', function (chunk) {
          let index = remaining.indexOf('\n');
          let line;

          remaining += chunk;

          while (index > -1) {
            line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            uniqueWords = self.countWords(uniqueWords, line);
            index = remaining.indexOf('\n');
          }
        })
        .on('end', () => {
          if (remaining.length > 0) uniqueWords = self.countWords(uniqueWords, remaining);
          resolve(uniqueWords);
        });
    });
  }
}

module.exports = ReadFile;
