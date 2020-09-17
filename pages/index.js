/* eslint-disable react/no-unescaped-entities */
import { Heading, Box, useColorMode, Text } from '@chakra-ui/core';

const bgColor = { light: 'white', dark: 'gray.800' };
const fgColor = { light: 'black', dark: 'white' };

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
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
          <Heading as="h1" fontSize={['2.5rem', '3rem']}>
            Off Topic
          </Heading>
          <br />
          <Text fontSize={['1.25rem', '1.25rem']}>Here we come.</Text>
          <br />
        </Box>
      </Box>
    </>
  );
};

export default Home;
