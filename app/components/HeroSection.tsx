import { Link, Box, Flex, Image, Button, Heading } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box >
    <Flex
        as="header"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        align="center"
        justify="space-between"
        padding="1rem 2.5rem"
        zIndex="10"
    >   
        <Link href="/">
        <Flex align="center">
        <Image src="/logo.png" alt="Helping Hub Logo" boxSize="60px" />
        <Heading as="h1" size="3xl" ml="4" color="black">
            Helping Hub
        </Heading>
        </Flex>
        </Link>
        <Flex align="center" gap={3}>
        <Button colorScheme="teal" size="xl" rounded="full" w="110px" padding="0.5rem 2.5rem" bg="rgb(238, 230, 213)">
            Events
        </Button>
        <Button colorScheme="teal" size="xl" rounded="full" w="110px" padding="0.5rem 2.5rem" bg="rgb(238, 230, 213)">
            Sign Up
        </Button>
        </Flex>
    </Flex>
    </Box>
);
};

export default HeroSection;
