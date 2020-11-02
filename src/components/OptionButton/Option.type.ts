export enum Options {
  Rock,
  Paper,
  Scissors,
}

export type Option = {
  name: Options;
  defeats: Options;
};
