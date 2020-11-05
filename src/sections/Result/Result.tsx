import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OptionButton } from '../../components/OptionButton/OptionButton';
import { Option } from '../../components/OptionButton/Option.type';
import { Result as eResult, checkResult } from '../../logic/checkResult';
import { getRandomInt, getResultText } from '../../util/util';
import { options } from '../../data/data';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes/routes';

const ResultContainer = styled.section`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--v-spacing) calc(var(--h-spacing));
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PlayerTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  color: ${({ theme }) => theme.color.white};
  text-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 var(--v-spacing);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

const PlayAgainButton = styled.button`
  display: block;
  padding: 2rem;
  border: none;
  background: ${({ theme }) => theme.color.white};
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.25rem;
  color: ${({ theme }) => theme.color.darkBlue};
  margin: auto;
  font-size: 1.4rem;
  cursor: pointer;
  width: 100%;
  max-width: 22rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.6rem;
  }
`;

const ResultText = styled.h2`
  font-size: 5.6rem;
  line-height: 6.8rem;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  text-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  margin: 0 0 calc(var(--v-spacing) * 2);
`;

const AttentionGrabberContainer = styled.div`
  grid-row: 2;
  grid-column: 1 / span 2;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-row: auto;
    grid-column: auto;
  }
`;

interface ResultProps {
  userChoice: Option | null;
  houseChoice: Option;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setUserChoice: React.Dispatch<React.SetStateAction<Option | null>>;
  setHouseChoice: React.Dispatch<React.SetStateAction<Option>>;
}

export const Result = ({
  userChoice,
  setUserChoice,
  houseChoice,
  setHouseChoice,
  score,
  setScore,
}: ResultProps): JSX.Element => {
  const [winner, setWinner] = useState<eResult | null>(null);
  const history = useHistory();

  const handlePlayAgain = () => {
    setUserChoice(null);
    setHouseChoice(options[getRandomInt(0, options.length - 1)]);
    history.push(Routes.Game);
  };

  useEffect(() => {
    if (userChoice) {
      const result = checkResult(userChoice, houseChoice);
      setWinner(result);
      switch (result) {
        case eResult.User:
          setScore((score += 1));
          break;
        case eResult.House:
          setScore(0);
          break;
        case eResult.Tied:
        default:
          break;
      }
    }
  }, []);

  return (
    <ResultContainer>
      <div>
        <PlayerTitle>You Picked</PlayerTitle>
        {userChoice && <OptionButton option={userChoice} />}
      </div>
      {winner !== null ? (
        <AttentionGrabberContainer>
          <ResultText>{getResultText(winner)}</ResultText>
          <PlayAgainButton onClick={handlePlayAgain}>Play again</PlayAgainButton>
        </AttentionGrabberContainer>
      ) : null}
      <div>
        <PlayerTitle>House Picked</PlayerTitle>
        <OptionButton option={houseChoice} />
      </div>
    </ResultContainer>
  );
};
