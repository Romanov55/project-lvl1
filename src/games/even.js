import runGameEngine from '../index.js';
import getRandomNumber from '../rand.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const isEven = (question) => {
  const result = question % 2 === 0;
  return result;
};

const getData = () => {
  const question = getRandomNumber(minNumber, maxNumber);

  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startEven = () => runGameEngine(getData, gameTask);

export default startEven;
