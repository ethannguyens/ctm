import expect from 'expect';
import PrimeNumber from './prime-number';

describe('Prime Number', () => {
  it('should tell wether a given numver is prime', () => {
    //arrange
    const n = 198;

    //act
    const isPrime = PrimeNumber.isPrime(n);

    //assert
    expect(isPrime).toBe(false);
  });

  it('should return an object with correct prime result', () => {
    //arrange
    const obj = {
      a: {
        count: 198
      }
    };

    //act
    const newObj = PrimeNumber.getPrimeWords(obj);

    //assert
    expect(newObj['a'].prime).toBe(false);

  });
});