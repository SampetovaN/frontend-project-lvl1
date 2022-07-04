import game from '../src/index.js';
import { randomNumber } from '../src/util.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getValidResult = (num) => num % 2 === 0 ? 'yes' : 'no';

const even = () => {
  game(randomNumber, getValidResult, DESCRIPTION);
};

export default even;
