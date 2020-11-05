import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OptionButton } from '../../components/OptionButton/OptionButton';
import { Option } from '../../components/OptionButton/Option.type';
import { Result as eResult, checkResult } from '../../logic/checkResult';
import { getResultText } from '../../util/util';

const ResultContainer = styled.section`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--v-spacing) calc(var(--h-spacing) / 2);
  margin: auto;
`;

const PlayerTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3.2rem;
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
  padding: 1rem;
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
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
`;

interface ResultProps {
  userChoice: Option | null;
  houseChoice: Option;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setUserChoice: React.Dispatch<React.SetStateAction<Option | null>>;
  setHouseChoice: React.Dispatch<React.SetStateAction<Option>>;
}

export const Result = ({ userChoice, houseChoice, score, setScore }: ResultProps): JSX.Element => {
  const [winner, setWinner] = useState<eResult | null>(null);

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
        <div>
          <ResultText>{getResultText(winner)}</ResultText>
          <PlayAgainButton>Play again</PlayAgainButton>
        </div>
      ) : null}
      <div>
        <PlayerTitle>The House Picked</PlayerTitle>
        <OptionButton option={houseChoice} />
      </div>
    </ResultContainer>
  );
};
