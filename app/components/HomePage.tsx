import HeroSection from "./HeroSection";
import { Box, Flex, Button } from '@chakra-ui/react';


const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <Flex height="20vh" align="center" justify="center" gap="8" direction="column" transform="translateX(10px)">
                <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="green" 
                        bg={{ base: "colorPalette.600", _hover: "colorPalette.800" }} color="black">
                    VOLUNTEER
                </Button>
                <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" 
                        bg="rgb(83,156,204)" _hover={{bg: "rgb(64, 108, 133)"}}>
                    HOST AN EVENT
                </Button>
                <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="orange"
                        bg={{ base: "colorPalette.400", _hover: "colorPalette.600" }}>
                    CREATE A PROFILE
                </Button>
            </Flex>
        </Box>
      );
    };
    
export default HomePage;