import { Option } from '../components/OptionButton/Option.type';

export enum Result {
  Tied,
  User,
  House,
}

export function checkResult(userChoice: Option, houseChoice: Option): Result {
  if (userChoice.name === houseChoice.name) {
    // console.log('Tied!');
    return Result.Tied;
  } else if (userChoice.defeats === houseChoice.name) {
    // console.log('User wins!');
    return Result.User;
  } else if (houseChoice.defeats === userChoice.name) {
    // console.log('House wins!');
    return Result.House;
  } else {
    // console.log('Tied!');
    return Result.Tied;
  }
}
