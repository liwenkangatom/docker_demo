// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary01: string; 
      primary02: string; 
      primary03: string; 
      primary04: string; 
      secondary01: string; 
      secondary02: string; 
      secondary03: string; 
      tertiary01: string; 
      tertiary02: string; 
      tertiary03: string; 
    };
  }
}