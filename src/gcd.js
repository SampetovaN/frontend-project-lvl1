import game from '../src/index.js';
import { randomNumber } from '../src/util.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const randomGcdNumbers = () => `${randomNumber()} ${randomNumber()}`;

const getValidResult = (numsString) => {
  let [x, y] = numsString.split(' ');
  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x || y;
};

const gcd = () => {
  game(randomGcdNumbers, getValidResult, DESCRIPTION);
};

export default gcd;
