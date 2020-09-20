/* eslint-disable react/no-unescaped-entities */
import { Heading, Box, useColorMode, Divider } from '@chakra-ui/core';

const bgColor = { light: 'white', dark: 'gray.800' };
const fgColor = { light: 'black', dark: 'white' };

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      height="100vh"
      width="100%"
      bg={bgColor[colorMode]}
      color={fgColor[colorMode]}
      backgroundSize="cover"
    >
      <Box
        width="85%"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        pt={5}
        px={15}
        mx="auto"
      >
        <Heading as="h1" mb={3}>
          V&N.
        </Heading>
        <Divider />
      </Box>
    </Box>
  );
};

export default About;
