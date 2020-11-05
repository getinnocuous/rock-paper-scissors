// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      md: string;
      lg: string;
    };
    color: {
      lightblue: string;
      white: string;
      mustard: string;
      navy: string;
      red: string;
      darkBlue: string;
      grey: string;
    };
  }
}
