import WordPrimeCount from '../services/combine-word-prime';
import path from 'path';

class WordApi {
  static getWords(path) {
    return new Promise((resolve, reject) => {
      WordPrimeCount.getWordPrimeCount(path).then(words => {
        resolve(words);
      });
    });
  }
}

export default WordApi;
