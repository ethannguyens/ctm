import ReadFile from './read-file';
import PrimeNumber from './prime-numer';

const readFile = new ReadFile();

readFile.getUniqueWords('src/modules/Railway-Children-by-E-Nesbit.txt').then(res => {
  PrimeNumber.getPrimeWords(res);
});