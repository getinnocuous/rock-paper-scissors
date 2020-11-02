import React from 'react';
import styled from 'styled-components/macro';
import { GlobalStyle, Theme } from './styles/GlobalStyles';
import { DocumentHead } from './components/DocumentHead/DocumentHead';
import { Header } from './components/Header/Header';
const Container = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
`;

function App(): JSX.Element {
  return <h1>Hello</h1>;
  return (
    <>
      <GlobalStyle />
      <DocumentHead />
      <Theme>
        <Container></Container>
        <Header />
      </Theme>
    </>
  );
}

export default App;
