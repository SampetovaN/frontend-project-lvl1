import game from './index.js';
import { randomNumber, randomInt } from './util.js';

const DESCRIPTION = 'What number is missing in the progression?';
const EMPTY_NUMBER = '..';

const makeProgression = (length, step) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push((i === 0 ? randomNumber() : progression[i - 1]) + step);
  }
  return progression;
};

const randomProgression = () => {
  const randomProggressionLength = randomInt(5, 10);
  const randomEmptyNumber = randomInt(0, randomProggressionLength - 1);
  const progression = makeProgression(randomProggressionLength, randomNumber());
  progression[randomEmptyNumber] = EMPTY_NUMBER;

  return progression.join(' ');
};

const getValidResult = (progression) => {
  const numbers = progression.split(' ').map((num) => (num !== EMPTY_NUMBER ? Number(num) : num));
  let foundNumber;
  for (let i = 0; i <= numbers.length; i += 1) {
    if (i === 0 && numbers[i] === EMPTY_NUMBER) {
      foundNumber = numbers[i + 1] - (numbers[i + 2] - numbers[i + 1]);
      break;
    } else if (i === numbers.length && numbers[i] === EMPTY_NUMBER) {
      const lastIndex = numbers.length - 1;
      foundNumber = numbers[lastIndex] + (numbers[lastIndex] - numbers[lastIndex - 1]);
    } else if (numbers[i] === EMPTY_NUMBER) {
      foundNumber = numbers[i - 1] + ((numbers[i + 1] - numbers[i - 1]) / 2);
      break;
    }
  }
  return foundNumber;
};

const progression = () => {
  game(randomProgression, getValidResult, DESCRIPTION);
};

export default progression;
