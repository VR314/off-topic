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

const graphcms = new GraphQLClient(process.env.URL);

export async function getStaticProps(context) {
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

const PostLayout = ({ post }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const fgColor = { light: 'black', dark: 'white' };
  console.log(post.content)
  return (
    <Box
      height="100%"
      width="100%"
      bg={bgColor[colorMode]}
      backgroundSize="cover"
    >
      <Box
        width="85%"
        bg={bgColor[colorMode]}
        color={fgColor[colorMode]}
        pb={20}
        pt={5}
        px="auto"
        mx="auto"
      >
        <Heading as="h1" size="xl" mb={2}>
          {post.title}
        </Heading>
        <Text fontSize="1rem" mb={2}>
          {post.updatedAt}
        </Text>
        <Divider mb={3} />
        <ReactMarkdown source={post.content.markdown} />
        <Divider />
        <Text fontSize="1.25rem">
          Thanks for visiting, I hope you enjoyed!{' '}
          <span>
            <Link href="/blog" passHref>
              <ChakraLink color="blue.200">
                There is more where this came from!
              </ChakraLink>
            </Link>
          </span>
        </Text>
      </Box>
    </Box>
  );
};

export default PostLayout;
