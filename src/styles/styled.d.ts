// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      md: string;
      lg: string;
    };
    color: {
      lightblue: string;
      white: string;
      mustard: string;
      navy: string;
      red: string;
      icon: string;
      grey: string;
    };
  }
}
