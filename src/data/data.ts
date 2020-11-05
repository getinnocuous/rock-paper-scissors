import { Option, Options } from '../components/OptionButton/Option.type';

export const options: Option[] = [
  {
    name: Options.Rock,
    defeats: Options.Scissors,
  },
  {
    name: Options.Scissors,
    defeats: Options.Paper,
  },
  {
    name: Options.Paper,
    defeats: Options.Rock,
  },
];
