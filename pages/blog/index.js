/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import {
  Heading,
  Box,
  useColorMode,
  Text,
  Tag,
  Link as ChakraLink,
  Divider,
  Button,
} from '@chakra-ui/core';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

const bgColor = { light: 'white', dark: 'gray.800' };
const fgColor = { light: 'black', dark: 'white' };

const linkFG = { light: 'blue.500', dark: 'blue.200' };

const BlogPost = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Box mb={12} key={props.title}>
      <Button variant="ghost" px={0} mb={2}>
        <Heading as="h3" fontSize="28px">
          <Link href="/blog/[slug]" as={`/blog/${props.slug}`} passHref>
            <ChakraLink color={[linkFG[colorMode]]}>{props.title}</ChakraLink>
          </Link>
        </Heading>
      </Button>
      <br />
      <Text fontSize={['16px', '20px']} mb={3}>
        {props.oneLiner} —{' '}
        <i>
          {Math.floor(
            (new Date() - Date.parse(props.updatedAt)) / 1000 / 60 / 60 / 24
          )}{' '}
          days ago
        </i>
      </Text>

      {props.tags.map((value) => (
        <Tag mr="3" size="md">
          {value}
        </Tag>
      ))}
    </Box>
  );
};

const Blog = ({ posts }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      height="100vh"
      width="100%"
      bg={bgColor[colorMode]}
      color={fgColor[colorMode]}
      backgroundSize="cover"
      pb="5%"
    >
      <Box
        maxW="85%"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        pt={5}
        px={15}
        mx="auto"
      >
        <Heading as="h1">Posts</Heading>

        <Divider mb={5} />
        {posts.map((post) => (
          <BlogPost
            key={post.title}
            title={post.title}
            summary={post.oneLiner}
            slug={post.slug}
            tags={post.tags}
            reads={post.reads}
            {...post}
          />
        ))}
      </Box>
    </Box>
  );
};

export async function getServerSideProps() {
  const graphcms = new GraphQLClient(process.env.URL);

  const { posts } = await graphcms.request(
    `{
      posts(orderBy: publishedAt_DESC) {
        slug
        oneLiner
        updatedAt
        title
        reads
        author {
          name
        }
        tags
      }
    }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
