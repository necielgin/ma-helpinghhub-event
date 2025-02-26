'use client'
import { useState } from 'react';

import HeroSection from "./HeroSection";
import SearchEventsBox from "./SearchEventsBox";
import { Box, Flex, Button, Heading } from '@chakra-ui/react';

const HomePage = () => {
    const [searchBoxModalOpen, setSearchBoxModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    return (
        <Box>
            <HeroSection />
        <Flex direction="column" align="center"
                justify="center" height="40vh" textAlign="center" color="black">
            <Heading as="h1" size="5xl" mb="2">
                Make a Difference
            </Heading>
            <Heading as="h2" size="4xl" mb="4">
                Volunteer or Organize a Volunteering Event
            </Heading>
                <p>Explanation text here Explanation text here Explanation text here </p>
        </Flex>
        {isModalOpen && (
        <Flex height="20vh" align="center" justify="center" gap="8" direction="column" transform="translateX(10px)">
            <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="green" 
                    bg={{ base: "colorPalette.600", _hover: "colorPalette.800" }} color="black"
                    onClick={() => {
                        setSearchBoxModalOpen(true);
                        setIsModalOpen(false);
                        }}>
                    VOLUNTEER
            </Button>
            <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" 
                    bg="rgb(83,156,204)" _hover={{bg: "rgb(64, 108, 133)"}}>
                HOST AN EVENT
            </Button>
            <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="orange"
                    bg={{ base: "colorPalette.500", _hover: "colorPalette.700" }}>
                CREATE A PROFILE
            </Button>
        </Flex>
        )}
        {searchBoxModalOpen && (
            <Flex direction="column">
            <SearchEventsBox setSearchBoxModalOpen={setSearchBoxModalOpen} setIsModalOpen = {setIsModalOpen} />
            </Flex>
        )
        }
    </Box>
    );
    };
    
export default HomePage;