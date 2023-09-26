// my-theme.ts
import { DefaultTheme } from 'styled-components';


const cardXTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary01: '#5c88da',
    primary02: '#adc3ed',
    primary03: '#dee7f8',
    primary04: '#f7f9fd',
    secondary01: '#05c3dd',
    secondary02: '#82e1ee',
    secondary03: '#cdf3f8',
    tertiary01: '#a3674b',
    tertiary02: '#d1b3a5',
    tertiary03: '#ede1db',
  },
};

const aeonTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary01: '#7461CF',
    primary02: '#b9b0e7',
    primary03: '#e3dff5',
    primary04: '#f8f7fc',
    secondary01: '#6eceb2',
    secondary02: '#b6e6d8',
    secondary03: '#e2f5f0',
    tertiary01: '#ffa822',
    tertiary02: '#ffd390',
    tertiary03: '#ffeed3'
  },
};
const Themes = {
  'cardX': cardXTheme,
  'aeon': aeonTheme,
}

export default Themes;
