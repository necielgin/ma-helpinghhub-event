import { Box, Flex, CloseButton } from '@chakra-ui/react';


interface SearchEventsBoxProps {
  setSearchBoxModalOpen: (open: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
}

const SearchEventsBox: React.FC<SearchEventsBoxProps> = ({setSearchBoxModalOpen, setIsModalOpen}) => {
  return (
    <Box 
  background={"rgba(121,135,84, 0.55)"} 
  margin="auto" 
  width="20%" 
  height="100px" 
  borderRadius="10px"
  overflow="hidden" 
>
  {/* Navbar-like top section */}
  <Flex 
    background={"rgba(77, 115, 104, 0.79)"} 
    align="center" 
    justify="flex-start" 
    borderTopRadius="10px" 
    height="30px" 
    px="10px"
  >    
    <CloseButton 
      size="2xs" 
      color="white" 
      variant="subtle" 
      bg="red" 
      borderRadius="100px"
      onClick={() => {
        setSearchBoxModalOpen(false)
        setIsModalOpen(true)
      }}
    />
  </Flex>   

  <Box textAlign="center" padding="10px">
    hello 
  </Box>
</Box>

  );
};

export default SearchEventsBox;
