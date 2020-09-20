import {
  useColorMode,
  Heading,
  Text,
  Box,
  Divider,
  Link as ChakraLink,
} from '@chakra-ui/core';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import ReactMarkdown from 'react-markdown';
import React from 'react';

const graphcms = new GraphQLClient(process.env.URL);

export async function getServerSideProps(context) {
  const { post } = await graphcms.request(
    `query PostPageQuery($slug: String!){
      post(where: {slug: $slug}) {
        author {
          bio
          name
        }
        tags
        title
        content {
          markdown
        }
      }
    }
    `,
    {
      slug: context.params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

/*
export async function getStaticPaths() {
  const { posts } = await graphcms.request(`{
    posts {
      slug
    }
  }`);

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
*/

const renderers = {
  heading: (props) => {
    switch (props.level) {
      case 1:
        return (
          <Heading as="h1" size="2xl">
            {props.children}
          </Heading>
        );
      case 2:
        return (
          <Heading as="h2" size="xl">
            {props.children}
          </Heading>
        );
      default:
        return (
          <Heading as="h3" size="lg">
            {props.children}
          </Heading>
        );
    }
  },
  paragraph: (props) => {
    return (
      <>
        <Text fontSize={['1rem', '1.25rem']}>{props.children}</Text>
        <br />
      </>
    );
  },
  link: (props) => {
    return (
      <a href={props.href}>
        <ChakraLink color="blue.400">{props.children}</ChakraLink>
      </a>
    );
  },
};

const PostLayout = ({ post }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const fgColor = { light: 'black', dark: 'white' };

  return (
    <>
      <Box
        height="auto"
        width="100%"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        backgroundSize="cover"
        pb={5}
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
          <Heading as="h1" size="2xl" mb={2}>
            {post.title}
          </Heading>
          <Text fontSize="1rem" mb={2}>
            {post.updatedAt}
          </Text>
          <Divider mb={3} />
          <ReactMarkdown
            renderers={renderers}
            source={post.content.markdown}
            escapeHtml={false}
          />
          {
            //  use https://github.com/aknuds1/html-to-react#setup
          }
          <Divider />
          <Text fontSize="1.25rem">
            Thanks for visiting, we hope you enjoyed!{' '}
          </Text>
          <Text fontSize="1.25rem">
            <Link href="/blog" passHref>
              <ChakraLink color="blue.400">
                There is more where this came from!
              </ChakraLink>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default PostLayout;
