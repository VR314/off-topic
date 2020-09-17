import '../styles/globals.css';
import { CSSReset, ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import theme from '../styles/chakraTheme';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider value="dark">
        <NavBar />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
