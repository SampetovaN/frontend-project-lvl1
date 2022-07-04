import game from '../src/index.js';
import { randomNumber } from '../src/util.js';

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
  const gcdNumbers = `${randomNumber()} ${randomNumber()}`;
  game(gcdNumbers, getValidResult);
};

export default gcd;
