import game from '../src/index.js';
import { randomNumber } from '../src/util.js';

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
  game(randomGcdNumbers, getValidResult);
};

export default gcd;
