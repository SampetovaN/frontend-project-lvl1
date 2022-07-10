import readlineSync from 'readline-sync';
import learnName from './cli.js';

const NUM_ROUNDS = 3;

const game = (generateCondition, getValidResult, description) => {
  const NAME = learnName();
  const round = () => {
    const condition = generateCondition();
    console.log(`Question: ${condition}`);
    const answer = readlineSync.prompt();
    const result = getValidResult(condition);
    if (answer.trim() !== result.toString()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${NAME}!`);
      process.exit();
    }
    console.log('Correct!');
  };
  let i = 0;
  console.log(description);
  while (i < NUM_ROUNDS) {
    round();
    i += 1;
  }
  console.log(`Congratulations, ${NAME}!`);
  process.exit();
};
export default game;
