import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, ThemeProvider } from './styles/GlobalStyles';
import { DocumentHead } from './components/DocumentHead/DocumentHead';
import { Header } from './components/Header/Header';
import { OptionButton } from './components/OptionButton/OptionButton';
import { Option, Options } from './components/OptionButton/Option.type';
import { checkResult } from './logic/checkResult';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const options: Option[] = [
  {
    name: Options.Rock,
    defeats: Options.Scissors,
  },
  {
    name: Options.Scissors,
    defeats: Options.Paper,
  },
  {
    name: Options.Paper,
    defeats: Options.Rock,
  },
];

const Container = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
`;

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <DocumentHead />
        <Container>
          <Header />
          <main style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                display: 'inline-grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: 'var(--v-spacing) var(--h-spacing)',
                margin: 'auto',
              }}
            >
              <OptionButton option={options[0]} />
              <OptionButton option={options[1]} />
              <div style={{ gridColumn: '1 / span 2', display: 'flex', justifyContent: 'center' }}>
                <OptionButton option={options[2]} />
              </div>
            </div>
          </main>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
