import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";

const HomePage = () => {
    return (
        <Box position="relative">
          {/* Background Image Container */}
          <Box
            position="fixed"
            top="0"
            left="0"
            w="100%"
            h="100%"
            zIndex="-1"
            bgImage="url('/background.png')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
    
          {/* Page Content */}
          <Box>
            <HeroSection />
          </Box>
        </Box>
      );
    };

export default HomePage;