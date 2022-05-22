import readlineSync from 'readline-sync';
import learnName from '../src/cli.js';

readlineSync.setDefaultOptions({ prompt: 'Your answer: ' });

const randomNumber = () => Math.floor(Math.random() * 100);
const getResult = (num) => num % 2 === 0 ? 'yes' : 'no';

const even = () => {
  const NAME = learnName();
  const NUM_ROUNDS = 3;
  const game = () => {
    const randomNum = randomNumber();
    readlineSync.question(`Question: ${randomNum}`);
    const answer = readlineSync.prompt();
    const result = getResult(randomNum);
    if (answer.trim() !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${NAME}!`);
      process.exit();
    }
    console.log('Correct!');
  };
  let i = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < NUM_ROUNDS) {
    game();
    i += 1;
  }
  console.log(`Congratulations, ${NAME}!`);
  process.exit();
};

export default even;
