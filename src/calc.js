import game from './index.js';
import { randomNumber, randomInt } from './util.js';

const DESCRIPTION = 'What is the result of the expression?';

const randomExpression = () => {
  const signs = ['+', '-', '*'];
  return `${randomNumber()} ${signs[randomInt(0, 2)]} ${randomNumber()}`;
};
const getValidResult = (expression) => {
  const expressionParts = expression.split(' ');
  const firstTerm = +expressionParts[0];
  const secTerm = +expressionParts[2];
  const sign = expressionParts[1];
  const mapSigns = {
    '+': firstTerm + secTerm,
    '-': firstTerm - secTerm,
    '*': firstTerm * secTerm,
  };
  return mapSigns[sign];
};

const calc = () => {
  game(randomExpression, getValidResult, DESCRIPTION);
};

export default calc;
