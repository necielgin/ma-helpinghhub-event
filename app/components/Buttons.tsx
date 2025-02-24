import { Flex, Button } from '@chakra-ui/react';

const Buttons = () => {
  return (
    <Flex height="89vh" align="center" justify="center" gap="8" direction="column" transform="translateX(30px)">
        <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="orange"
        bg={{ base: "colorPalette.400", _hover: "colorPalette.500" }} >VOLUNTEER</Button>
        <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="blue" 
        bg={{ base: "colorPalette.500", _hover: "colorPalette.600" }}>HOST AN EVENT</Button>
        <Button w="275px" h="60px" colorScheme="teal" size="xl" rounded="full" colorPalette="green" 
        bg={{ base: "colorPalette.400", _hover: "colorPalette.600" }}>CREATE A PROFILE</Button>
    </Flex>
  );
};

export default Buttons;
