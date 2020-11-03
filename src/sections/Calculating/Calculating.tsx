import React from 'react';
import styled from 'styled-components';
import { OptionButton } from '../../components/OptionButton/OptionButton';
import { options } from '../../App';
import { getRandomInt } from '../../util/util';

const PlayerTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3.2rem;
  letter-spacing: 0.3rem;
  color: #ffffff;
  text-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 var(--v-spacing);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

export const Calculating = (): JSX.Element => (
  <section>
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: 'var(--v-spacing) var(--h-spacing)',
          margin: 'auto',
        }}
      >
        <div>
          <PlayerTitle>You Picked</PlayerTitle>
          <OptionButton option={options[0]} />
        </div>
        <div>
          <PlayerTitle>House Picked</PlayerTitle>
          <OptionButton option={options[getRandomInt(0, 2)]} />
        </div>
      </div>
    </main>
  </section>
);
