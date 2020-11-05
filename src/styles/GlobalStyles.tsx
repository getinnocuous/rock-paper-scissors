import React, { FC } from 'react';
import styled, { createGlobalStyle, ThemeProvider as TP, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    xs: '374px',
    md: '660px',
    lg: '1024px',
  },
  color: {
    lightblue: '#4664f4',
    white: '#f5f6fa',
    mustard: '#eb9f0e',
    navy: '#2a45c2',
    red: '#db2e4d',
    darkBlue: '#3b4262',
    grey: '#565468',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --layout-max-width: 82rem;
    --h-spacing: 2rem;
    --v-spacing: 1rem;
    --body:  'Barlow Semi Condensed', sans-serif;
    font-size: 62.5%;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs})  {
      --h-spacing: 1rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md})  {
      --h-spacing: 8rem;
      --v-spacing: 4rem;
    }
  }

  html {
    box-sizing: border-box;
    background: radial-gradient(134% 134% at 50% 0%, #1f3757 0%, #131537 100%);
    background-repeat: no-repeat;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--body);
    color: ${({ theme }) => theme.color.white};
    padding: var(--v-spacing) var(--h-spacing);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
`;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider: FC<Props> = ({ children }): JSX.Element => <TP theme={theme}>{children}</TP>;
