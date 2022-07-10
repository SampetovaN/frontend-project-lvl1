import game from './index.js';
import { randomNumber } from './util.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const randomGcdNumbers = () => `${randomNumber()} ${randomNumber()}`;

const getValidResult = (numsString) => {
  let [x, y] = numsString.split(' ').map(Number);
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
