const fs = require('fs');

class ReadFile {

  constructor() {
    this.countWords = this.countWords.bind(this);
    this.processData = this.processData.bind(this);
    this.getUniqueWords = this.getUniqueWords.bind(this);
    this.stream = this.stream.bind(this);
  }

  /**
   * The main function to get the uniqueWords
   * @param path
   * @param option
   * @param encode
   * @returns {Promise}
   */
  getUniqueWords(path, option = 'stream', encode = 'utf8') {
    return new Promise((resolve) => {
      switch (option) {
        case 'async':
          this.async(path, encode).then(uniqueWords => resolve(uniqueWords));
          break;
        case 'sync':
          this.sync(path, encode).then(uniqueWords => resolve(uniqueWords));
          break;
        default:
          this.stream(path, encode).then(uniqueWords => resolve(uniqueWords));
          break;
      }
    });
  }

  /**
   * Count how many times the word appear on the file
   * @param uniqueWords
   * @param line
   * @returns {*}
   */
  countWords(uniqueWords, line) {
    const words = line.match(/(?!\d)(\w+\b)/g, '');

    let word;
    for (let i in words) {
      word = words[i].toLowerCase();
      uniqueWords[word] ? uniqueWords[word].count += 1 : uniqueWords[word] = {'count': 1};
    }

    return uniqueWords;
  }

  /**
   * Pipe the data for counting after buffering
   * @param data
   * @returns {{}}
   */
  processData(data) {
    const self = this;
    let index = data.indexOf('\n');
    let uniqueWords = {};
    let line;

    while (index > -1) {
      line = data.substring(0, index);
      data = data.substring(index + 1);
      uniqueWords = self.countWords(uniqueWords, line);
      index = data.indexOf('\n');
    }

    return uniqueWords;
  }

  /**
   * Streaming the content of the file incrementally
   * @param path
   * @param encode
   * @returns {Promise}
   */
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

  /**
   * Read the whole content of the file asynchronously
   * @param path
   * @param encode
   * @returns {Promise}
   */
  async(path, encode) {
    return new Promise(resolve => {
      fs.readFile(path, encode, (err, data) => {
        if (err) throw err;
        resolve(this.processData(data));
      });
    });
  }

  /**
   * Read the whole content of the file synchronously
   * @param path
   * @param encode
   * @returns {Promise}
   */
  sync(path, encode) {
    return new Promise(resolve => {
      const data = fs.readFileSync(path, encode);
      resolve(this.processData(data));
    });
  }

}

module.exports = ReadFile;
