import WordPrimeCount from '../services/combine-word-prime';
import path from 'path';

class WordApi {
  static getWords() {
    return new Promise((resolve, reject) => {
      WordPrimeCount.getWordPrimeCount(path.join( __dirname, '../mock/Railway-Children-by-E-Nesbit.txt')).then(words => {
        resolve(words);
      })
    });
  }
}

export default WordApi;
