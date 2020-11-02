import React from 'react';
import { theme } from '../../../styles/GlobalStyles';
import { ScissorsIcon } from '../Icons/ScissorsIcon';
import { PaperIcon } from '../Icons/PaperIcon';
import { RockIcon } from '../Icons/RockIcon';
import { Option, Options } from '../Option.type';

export const handleColorType = (option: Option): string => {
  switch (option.name) {
    case Options.Rock:
      return theme.color.red;
    case Options.Paper:
      return theme.color.lightblue;
    case Options.Scissors:
      return theme.color.mustard;
    default:
      return theme.color.white;
  }
};

export const handleIconType = (option: Option): JSX.Element | undefined => {
  switch (option.name) {
    case Options.Rock:
      return <RockIcon />;
    case Options.Paper:
      return <PaperIcon />;
    case Options.Scissors:
      return <ScissorsIcon />;
    default:
      return;
  }
};
