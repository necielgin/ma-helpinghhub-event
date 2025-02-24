import { Link, Box, Flex, Image, Button, Heading } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box >
      {/* Header */}
    <Flex
        as="header"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        align="center"
        justify="space-between"
        padding="1rem 2.5rem"
        bg="rgba(0, 0, 0, 0)" // transparent
        zIndex="10"
    >   
        <Link href="/" style={{ textDecoration: 'none' }}>
        <Flex align="center">
        <Image src="/logo.png" alt="Helping Hub Logo" boxSize="60px" />
        <Heading as="h1" size="xl" ml="2" color="white">
            Helping Hub
        </Heading>
        </Flex>
        </Link>
        <Flex align="center">
        <Button 
            variant="outline" 
            colorScheme="teal"
            size="md" mr="4" 
            rounded="2xl" 
            padding="0.5rem 2rem"
            >
                Events
        </Button>
        <Button colorScheme="teal" size="xl" rounded="full" padding="0.5rem 2.5rem">
            Sign Up
        </Button>
        </Flex>
    </Flex>
    </Box>
);
};

export default HeroSection;
