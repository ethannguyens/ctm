const fs = require('fs');

class ReadFile {
  constructor(path, type = 'stream', encode = 'utf8') {
    this.path = path;
    this.type = type;
    this.encode = encode;

    this.uniqueWords = {};

    this.countWords = this.countWords.bind(this);
    this.stream = this.stream.bind(this);

    this.stream();
  }

  countWords(line) {
    const words = line.match(/(?!\d)(\w+\b)/g, '');

    let word;
    for (let i in words) {
      word = words[i].toLowerCase();
      this.uniqueWords[word] ? this.uniqueWords[word] += 1 : this.uniqueWords = 1;
    }
  }

  stream() {
    let remaining = '';

    fs.createReadStream(this.path, this.encode)
      .on('data', function(chunk) {
        let index = remaining.indexOf('\n');
        let line;

        remaining += chunk;

        while (index > -1) {
          line = remaining.substring(0, index);
          remaining = remaining.substring(index + 1);
          this.uniqueWords = self.countWords(line);
          index = remaining.indexOf('\n');
        }
      });

    return this.uniqueWords;
  }
}

module.exports = ReadFile;
