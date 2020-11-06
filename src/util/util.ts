import { Result } from '../logic/checkResult';
import { Option } from '../components/OptionButton/Option.type';
import { options } from './../data/data';

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getResultText = (result: Result): string => {
  switch (result) {
    case Result.User:
      return 'You win';
    case Result.House:
      return 'You lose';
    case Result.Tied:
      return 'Tied';
    default:
      return '';
  }
};

export const getRandomOption = (): Option => {
  return options[getRandomInt(0, options.length - 1)];
};
