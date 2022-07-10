import game from '../src/index.js';
import {randomNumber, booleanToStr} from '../src/util.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getValidResult = (number) => {
    const num = Number(number);
    if (num >= 3) {
        for (let i = 2; i < num; i++) {
           if(num % i === 0) {
               return booleanToStr(false);
           }
        }
        return booleanToStr(true);
    }
    return booleanToStr(num === 2);

};

const prime = () => {
    game(randomNumber, getValidResult, DESCRIPTION);
};

export default prime;
