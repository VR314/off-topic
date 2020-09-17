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
          My name is Varoon.
        </Heading>
        <Heading
          as="h3"
          fontSize={['1.5rem', '1.375rem']}
          fontWeight="300"
          fontStyle="italic"
        >
          If you don't know my name,&nbsp;you will soon.
        </Heading>
        <br />
        <hr />
        <br />
        <Text fontSize={['1.25rem', '1.175rem']}>
          A small brown boy from American suburbia. Son of immigrants, pursuing
          the modern American Dream. <i>El solo lobo;</i> self-taught from start
          to finish. Standing on the shoulders of giants, looking out towards
          the future.
        </Text>
        <br />
        <Text fontSize={['1.25rem', '1.175rem']}>
          Let's make this world (and other worlds!) better for humanity, so our
          descendants live in awe of our generation. Let's do something that
          makes us proud to be human.
        </Text>
        <br />
        {/*
        <Text fontSize={['1.25rem', '1.175rem']}>
          {' '}
          ideas in == ideas out. learning <span>
            &#10230;
          </span> manifestation.{' '}
        </Text>
        */}
      </Box>
    </Box>
  );
};

export default About;
