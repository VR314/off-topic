import {
  ThemeProvider,
  ColorModeProvider,
  useColorMode,
  Box,
} from '@chakra-ui/core';
import customTheme from '../styles/theme';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="light">
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
