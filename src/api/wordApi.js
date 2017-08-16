import WordPrimeCount from '../modules/word-prime-count';
import path from 'path';

class WordApi {
  static getWords() {
    return new Promise((resolve, reject) => {
      WordPrimeCount.getWordPrimeCount(path.join( __dirname, '../modules/test.txt')).then(words => {
        resolve(words);
      })
    });
  }
}

export default WordApi;
