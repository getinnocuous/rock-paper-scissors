import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Option } from './Option.type';
import { handleColorType, handleIconType } from './util/util';
import { Routes } from '../../routes/routes';
interface ButtonProps {
  color: string;
  onClick?: () => void;
}

const Button = styled.button<ButtonProps>`
  --border-width: 1.5rem;
  --size: 12.5rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    --border-width: 2.5rem;
    --size: 20rem;
  }
  position: relative;
  display: flex;
  width: var(--size);
  height: var(--size);
  border-radius: 100%;
  border: solid var(--border-width) ${({ color }) => color};
  transition: transform 0.2s ease-in-out;
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(0deg, #f3f3f3 0%, #dadada 100%);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      svg {
        transition: transform 0.2s ease-in-out;
      }

      &:focus {
        outline-width: 0.3rem;
        outline-style: solid;
        outline-color: ${({ theme }) => theme.color.navy};
      }

      &:active {
        transform: scale(0.95);
        outline: none;
        svg {
          transform: scale(0.85);
        }
      }
    `};
`;

interface OptionProps {
  option: Option;
  onClick?: () => void;
}

export const OptionButton = ({ option, onClick }: OptionProps): JSX.Element => {
  const history = useHistory();
  const handleClick = () => {
    if (onClick !== undefined) {
      onClick();
    }
    history.push(Routes.Results);
  };

  return (
    <Button onClick={onClick ? handleClick : undefined} color={handleColorType(option)}>
      <span>{handleIconType(option)}</span>
    </Button>
  );
};
