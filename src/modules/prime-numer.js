class PrimeNumber {
  constructor() {
    this.getPrimeWords = this.getPrimeWords.bind(this);
    this.isPrime = this.isPrime.bind(this);
  }

  static getPrimeWords(obj) {
    let primeWords = {};

    for (let key in obj) {
      primeWords[key] = this.isPrime(obj[key]);
      console.log(`${obj[key]} = ${this.isPrime(obj[key])}`);
    }

    return primeWords;
  }

  static isPrime(n) {
    let divisor = 2;

    while (n > divisor) {
      if (n % divisor === 0) return false;
      else divisor++
    }

    return true;
  }
}

module.exports = PrimeNumber;