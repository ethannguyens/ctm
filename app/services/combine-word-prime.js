import ReadFile from './read-file';
import PrimeNumber from './prime-number';

class WordPrimeCount {
  /**
   * Get both the word count and prime check results
   * @param path
   * @param option
   * @param encode
   * @returns {Promise}
   */
  static getWordPrimeCount(path, option, encode) {
    const readFile = new ReadFile();

    return new Promise(resolve => {
      readFile.getUniqueWords(path, option, encode).then((uniqueWords => {
        resolve(PrimeNumber.getPrimeWords(uniqueWords));
      }))
    });
  }
}

module.exports = WordPrimeCount;