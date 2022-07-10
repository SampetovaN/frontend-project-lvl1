import game from './index.js';
import { randomNumber, booleanToStr } from './util.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getValidResult = (num) => booleanToStr(num % 2 === 0);

const even = () => {
  game(randomNumber, getValidResult, DESCRIPTION);
};

export default even;
