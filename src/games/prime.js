import runGameEngine from '../index.js';
import getRandomNumber from '../rand.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const question = getRandomNumber(minNumber, maxNumber);

  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startPrime = () => runGameEngine(getData, gameTask);

export default startPrime;
