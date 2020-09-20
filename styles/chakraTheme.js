import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      900: '#1a202c',
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    ...theme.colors,
  },
  fonts: {
    ...theme.fonts,
    body: `"Rubik",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: 'Montserrat, serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    '2xl': '36px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '56px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 300,
    medium: 400,
    bold: 500,
  },
};

export default customTheme;
