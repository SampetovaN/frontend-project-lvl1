import readlineSync from 'readline-sync';
import learnName from '../src/cli.js';

const NUM_ROUNDS = 3;

const game = (generatedCondition, getValidResult) => {
  const NAME = learnName();
  const round = () => {
    console.log(`Question: ${generatedCondition}`);
    const answer = readlineSync.prompt();
    const result = getValidResult(generatedCondition);
    if (answer.trim() !== result.toString()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${NAME}!`);
      process.exit();
    }
    console.log('Correct!');
  };
  let i = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < NUM_ROUNDS) {
    round();
    i += 1;
  }
  console.log(`Congratulations, ${NAME}!`);
  process.exit();
};
export default game;
