import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 1.2rem;
  margin: 0 0 4rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6.2rem;
    padding: 2.4rem;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-style: normal;
  font-weight: bold;
  line-height: 0.8;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6.2rem;
  }
`;

const ScoreContainer = styled.div`
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 1.5rem;
  align-self: stretch;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 5rem;
  }
  span {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.color.navy};
    text-transform: uppercase;
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 6.4rem;
    line-height: 6.4rem;
    text-align: center;
    color: ${({ theme }) => theme.color.grey};
    margin: 0;
  }
`;

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <Title>
      Rock
      <br />
      Paper
      <br />
      Scissors
    </Title>
    <ScoreContainer>
      <span>Score</span>
      <p>0</p>
    </ScoreContainer>
  </HeaderContainer>
);
