const fs = require('fs');

class ReadFile {

  constructor() {
    this.getUniqueWords = this.getUniqueWords.bind(this);
    this.countWords = this.countWords.bind(this);
    this.stream = this.stream.bind(this);
  }

  getUniqueWords(path, option='stream', encode='utf8') {
    switch (option) {
      case 'async':
        console.log('async');
        break;
      case 'sync':
        console.log('sync');
        break;
      default:
        console.log('stream');
        return this.stream(path, encode);
    }
  }

  countWords(line) {
    const words = line.match(/(?!\d)(\w+\b)/g, '');

    let word;
    for (let i in words) {
      word = words[i].toLowerCase();
      console.log(word);
      this.uniqueWords[word] ? this.uniqueWords[word] += 1 : this.uniqueWords[word] = 1;
    }
  }

  stream(path, encode) {
    let remaining = '';

      fs.createReadStream(path, encode)
        .on('data', function(chunk) {
          let index = remaining.indexOf('\n');
          let line;

          remaining += chunk;

          while (index > -1) {
            line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            this.countWords(line);
            index = remaining.indexOf('\n');
          }
        })
        .on('end', () => {
          if (remaining.length > 0) this.countWords(remaining);
          return
        });
  }
}

console.log(new ReadFile('src/modules/test.txt'));

//module.exports = ReadFile;
