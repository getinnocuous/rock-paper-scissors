import React from 'react';
import styled from 'styled-components';
import { Option } from '../../components/OptionButton/Option.type';
import { OptionButton } from '../../components/OptionButton/OptionButton';
import { options } from '../../data/data';

const GameContainer = styled.section`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--v-spacing) var(--h-spacing);
  margin: auto;
`;

const CenteredItem = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: center;
`;

interface GameProps {
  setUserChoice: React.Dispatch<React.SetStateAction<Option | null>>;
}

export const Game = ({ setUserChoice }: GameProps): JSX.Element => {
  return (
    <GameContainer>
      <OptionButton onClick={() => setUserChoice(options[0])} option={options[0]} />
      <OptionButton onClick={() => setUserChoice(options[1])} option={options[1]} />
      <CenteredItem>
        <OptionButton onClick={() => setUserChoice(options[2])} option={options[2]} />
      </CenteredItem>
    </GameContainer>
  );
};
