import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { GlobalStyle, ThemeProvider, Container } from './styles/GlobalStyles';
import { DocumentHead } from './components/DocumentHead/DocumentHead';
import { Header } from './components/Header/Header';
import { Option } from './components/OptionButton/Option.type';
import { Game } from './sections/Game/Game';
import { Result } from './sections/Result/Result';
import { getRandomInt } from './util/util';
import { options } from './data/data';
import { Routes } from './routes/routes';
import { AnimatedRoutes, RouteTransition } from './components/animation/RouteTransition';

function App(): JSX.Element {
  const [houseChoice, setHouseChoice] = useState<Option>(options[getRandomInt(0, options.length - 1)]);
  const [userChoice, setUserChoice] = useState<Option | null>(null);
  const [score, setScore] = useState<number>(0);

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <DocumentHead />
        <Container>
          <Header score={score} />
          <main>
            <AnimatedRoutes exitBeforeEnter initial={true}>
              {userChoice && (
                <RouteTransition path={Routes.Results}>
                  <Result
                    score={score}
                    setScore={setScore}
                    userChoice={userChoice}
                    houseChoice={houseChoice}
                    setUserChoice={setUserChoice}
                    setHouseChoice={setHouseChoice}
                  />
                </RouteTransition>
              )}
              <RouteTransition exact path={Routes.Game} slideUp={20}>
                <Game setUserChoice={setUserChoice} />
              </RouteTransition>
              <Redirect to={Routes.Game} /> {/* catch all non-routes */}
            </AnimatedRoutes>
          </main>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
