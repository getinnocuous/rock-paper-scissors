import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OptionButton } from '../../components/OptionButton/OptionButton';
import { Option } from '../../components/OptionButton/Option.type';
import { Result as eResult, checkResult } from '../../logic/checkResult';

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

interface ResultProps {
  playersChoice: {
    user: Option | null;
    house: Option;
  };
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const getResultText = (result: eResult): string => {
  switch (result) {
    case eResult.User:
      return 'You win';
    case eResult.House:
      return 'You lose';
    case eResult.Tied:
      return 'Tied';
    default:
      return '';
  }
};

export const Result = ({ playersChoice, score, setScore }: ResultProps): JSX.Element => {
  const { user, house } = playersChoice;
  const [winner, setWinner] = useState<eResult | null>(null);

  useEffect(() => {
    if (user) {
      const result = checkResult(user, house);
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
    <section>
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'inline-grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: 'var(--v-spacing) var(--h-spacing)',
            margin: 'auto',
          }}
        >
          <div>
            <PlayerTitle>You Picked</PlayerTitle>
            {user && <OptionButton option={user} />}
          </div>
          {winner !== null ? (
            <div>
              <h1 style={{ fontSize: '5.4rem', textAlign: 'center', textTransform: 'uppercase' }}>
                {getResultText(winner)}
              </h1>
              <Link
                style={{
                  display: 'block',
                  padding: '2rem',
                  background: '#fff',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '2rem',
                }}
                to={'/'}
              >
                Play again
              </Link>
            </div>
          ) : null}
          <div>
            <PlayerTitle>The House Picked</PlayerTitle>
            <OptionButton option={house} />
          </div>
        </div>
      </main>
    </section>
  );
};
