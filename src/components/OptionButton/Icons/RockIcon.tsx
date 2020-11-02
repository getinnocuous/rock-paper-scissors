import React from 'react';
import styled from 'styled-components';

const RockSVG = styled.svg`
  width: 5.2rem;
  height: 4.4rem;
  path {
    fill: ${({ theme }) => theme.color.icon};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 6.7rem;
    height: 8rem;
  }
`;

export const RockIcon = (): JSX.Element => (
  <RockSVG viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M67.441 23.0849C66.5645 11.9814 54.1492 13.1152 54.1492 13.1152C48.9088 3.83661 40.7225 10.5573 40.7225 10.5573C34.4334 1.46363 26.548 9.8903 26.548 9.8903C12.9523 8.41765 13.4792 19.5827 13.4792 19.5827C13.1593 23.132 15.3953 34.1125 15.3953 34.1125C13.3783 27.7837 9.00338 33.0372 9.00338 33.0372C3.62507 41.3736 7.67361 45.9369 7.67361 45.9369C14.9512 54.5045 30.4608 64.7868 30.4608 64.7868C36.0767 68.0183 33.7013 70.8998 33.7013 70.8998L67.6693 65.2622L68.4503 58.7918C73.6138 43.1052 67.441 23.0849 67.441 23.0849Z" />
  </RockSVG>
);
