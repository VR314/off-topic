import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      800: '#121212', // default background color for dark theme
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
    body: "Kumbh Sans', sans-serif",
    heading: 'Montserrat, serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '16px',
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
    normal: 400,
    medium: 500,
    bold: 600,
  },
};

export default customTheme;
