import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';

export const theme = {
  breakpoints: {
    md: '660px',
    lg: '1024px',
  },
  color: {
    lightblue: '#4664F4',
    white: '#F5F6FA',
    mustard: '#EB9F0E',
    navy: '#2F3640',
    red: '#DB2E4D',
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
    @media screen and (min-width: ${theme.breakpoints.md})  {
      --h-spacing: 8rem;
      --v-spacing: 4rem;
    }
  }

  html {
    box-sizing: border-box;
    background: radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%);
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
    color: ${theme.color.white};
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

export const Theme = ({ children }: Props): JSX.Element => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
