import game from '../src/index.js';
import { randomNumber } from '../src/util.js';

const getValidResult = (num) => num % 2 === 0 ? 'yes' : 'no';

const even = () => {
  game(randomNumber, getValidResult);
};

export default even;
