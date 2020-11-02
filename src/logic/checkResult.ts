import { Option } from '../components/OptionButton/Option.type';

enum Result {
  Tied,
  User,
  House,
}

export function checkResult(userChoice: Option, houseChoice: Option): Result {
  if (userChoice.name === houseChoice.name) {
    return Result.Tied;
  } else if (userChoice.defeats === houseChoice.name) {
    return Result.User;
  } else if (houseChoice.defeats === userChoice.name) {
    return Result.House;
  } else {
    return Result.Tied;
  }
}
