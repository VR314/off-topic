/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Box, Flex, Button, useColorMode } from '@chakra-ui/core';

// TODO: add Menu from chakra UI to make menu collapsable

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  transition: background-color 0.1 ease-in-out;
`;

const bgColor = { light: 'white', dark: 'gray.800' };

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      bg={bgColor[colorMode]}
      as="nav"
      p={6}
      mx="auto"
    >
      <Box>
        <Link href="/" passHref>
          <Button as="a" variant="ghost" py={1} px="0.75rem"
            fontSize="1.5rem"
            fontWeight="400">
            Home
        </Button>
        </Link>
        <Link href="/blog" passHref>
          <Button as="a" variant="ghost" py={1} px="0.75rem"
            fontSize="1.5rem"
            fontWeight="400">
            Blog
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button as="a" variant="ghost" py={1} px="0.75rem"
            fontSize="1.5rem"
            fontWeight="400">
            About
          </Button>
        </Link>
      </Box>
      <Button variant="ghost" onClick={toggleColorMode}>
        {colorMode === 'light' ? (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
          >
            <path
              d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
              stroke="currentColor"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path
                d="M8 2V0H7v2h1zm-4.793.498L1.5.792.793 1.5 2.5 3.206l.707-.708zm9.293.708L14.207 1.5 13.5.792l-1.707 1.706.707.708zm-5 .791a3.499 3.499 0 100 6.996 3.499 3.499 0 100-6.996zM2 6.995H0v1h2v-1zm13 0h-2v1h2v-1zM1.5 14.199l1.707-1.707-.707-.707-1.707 1.706.707.708zm12.707-.708L12.5 11.785l-.707.707L13.5 14.2l.707-.708zM8 14.99v-1.998H7v1.999h1z"
                fill="currentColor"
              />
            </svg>
          )}
      </Button>
    </StickyNav>
  );
};

export default NavBar;
