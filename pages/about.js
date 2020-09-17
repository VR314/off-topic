/* eslint-disable react/no-unescaped-entities */
import { Heading, Box, useColorMode, Button, Text } from '@chakra-ui/core';
import Link from 'next/link';

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
          Off Topic.
        </Heading>
        <Heading
          as="h3"
          fontSize={['1.5rem', '1.375rem']}
          fontWeight="300"
          fontStyle="italic"
        >
          Coming soon
        </Heading>
        <br />
        <hr />
      </Box>
    </Box>
  );
};

export default About;
