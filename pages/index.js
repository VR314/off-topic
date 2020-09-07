import { Text, useColorMode, Box, Image } from '@chakra-ui/core';
import NavBar from '../components/NavBar';

const bgColor = { light: 'white', dark: 'gray.800' };
const fgColor = { light: 'black', dark: 'white' };

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <div className="App">
      <NavBar />
      <Box
        height="100vh"
        width="100%"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        backgroundSize="cover"
        mb={-5}
      >
        <Box
          width="85%"
          height="auto"
          bg={bgColor[colorMode]}
          color={fgColor[colorMode]}
          pt={5}
          px={15}
          mx="auto"
        >
          {colorMode === 'light' && (
            <Image src="logo.svg" pb="10%" px="5%" width="90%" />
          )}
          {colorMode === 'dark' && (
            <Image src="logo-dark.svg" pb="10%" px="5%" width="90%" />
          )}
          <Text fontWeight="normal">
            This is what we have so far... not much but a lot of the background
            set-up stuff is over with. Good first day.
          </Text>
          {/* Image Banner Here */}
        </Box>
      </Box>
    </div>
  );
}
