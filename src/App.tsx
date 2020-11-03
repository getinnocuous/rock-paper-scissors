import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle, ThemeProvider } from './styles/GlobalStyles';
import { DocumentHead } from './components/DocumentHead/DocumentHead';
import { Header } from './components/Header/Header';
import { OptionButton } from './components/OptionButton/OptionButton';
import { Option, Options } from './components/OptionButton/Option.type';
import { checkResult } from './logic/checkResult';
import { Calculating } from './sections/Calculating/Calculating';
import { getRandomInt } from './util/util';

export const options: Option[] = [
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
      <Router>
        <GlobalStyle />
        <DocumentHead />
        <Container>
          <Header />
          <Switch>
            <Route path="/result">
              <h1>Results page</h1>
            </Route>
            <Route path="/calculating">
              <Calculating />
            </Route>
            <Route exact path="/">
              <main style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    display: 'inline-grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: 'var(--v-spacing) var(--h-spacing)',
                    margin: 'auto',
                  }}
                >
                  <OptionButton
                    onClick={() => checkResult(options[0], options[getRandomInt(0, 2)])}
                    option={options[0]}
                  />
                  <OptionButton
                    onClick={() => checkResult(options[1], options[getRandomInt(0, 2)])}
                    option={options[1]}
                  />
                  <div style={{ gridColumn: '1 / span 2', display: 'flex', justifyContent: 'center' }}>
                    <OptionButton
                      onClick={() => checkResult(options[2], options[getRandomInt(0, 2)])}
                      option={options[2]}
                    />
                  </div>
                </div>
              </main>
            </Route>
            <Redirect to="/" /> {/* catch all non-routes */}
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
