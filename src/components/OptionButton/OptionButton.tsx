import React from 'react';
import styled, { css } from 'styled-components';
import { Option } from './Option.type';
import { handleColorType, handleIconType } from './util/util';

interface OptionProps {
  option: Option;
  onClick?: () => void;
}

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
  background: #babfd4;
  transition: transform 0.2s ease-in-out;
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    clip-path: circle(50% at 50% calc(50% + 0.5rem));
    background: linear-gradient(0deg, #f3f3f3 0%, #dadada 100%);
  }

  ${({ onClick }) =>
    onClick &&
    css`
      svg {
        transition: transform 0.2s ease-in-out;
      }

      &:focus {
        outline-width: 3px;
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

export const OptionButton = ({ option, onClick }: OptionProps): JSX.Element => (
  <Button onClick={onClick} color={handleColorType(option)}>
    <span>{handleIconType(option)}</span>
  </Button>
);
