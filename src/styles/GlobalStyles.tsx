import React from 'react';
import { createGlobalStyle, ThemeProvider as TP, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakpoints: {
    md: '660px',
    lg: '1024px',
  },
  color: {
    lightblue: '#4664f4',
    white: '#f5f6fa',
    mustard: '#eb9f0e',
    navy: '#2a45c2',
    red: '#db2e4d',
    icon: '#3b4262',
    grey: '#565468',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --layout-max-width: 78rem;
    --content-max-width: 48rem;
    --h-spacing: 2rem;
    --v-spacing: 1rem;
    --body:  'Barlow Semi Condensed', sans-serif;
    font-size: 62.5%;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md})  {
      --h-spacing: 8rem;
      --v-spacing: 4rem;
    }
  }

  html {
    box-sizing: border-box;
    background: radial-gradient(134% 134% at 50% 0%, #1f3757 0%, #131537 100%);
    background-repeat: no-repeat;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
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
`;

type Props = {
  children?: JSX.Element;
};

export const ThemeProvider = ({ children }: Props): JSX.Element => <TP theme={theme}>{children}</TP>;
