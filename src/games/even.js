import readlineSync from 'readline-sync';

export const exercise = console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const solutionEven = (name, comparisonYesNo) => {

  let i = 0;
  do {
    const randonNumber = Math.floor(Math.random() * (100));

    console.log(`Question: ${randonNumber}`);

    const answer = readlineSync.question('Your answer: ');

    let example;
    if (randonNumber % 2 === 0) {
      example = 'yes';
    } else {
      example = 'no';
    }

    comparisonYesNo(example, answer, i, name);
    if (example !== answer) {
      i += 3;
    }
    i += 1;
  } while (i < 3);
};
