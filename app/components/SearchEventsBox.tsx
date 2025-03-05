'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { autoComplete } from "@/app/lib/google"
import { Box, Flex, CloseButton, Input, Text, Spinner, VStack } from '@chakra-ui/react';
import { InputGroup } from "@/components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { PlaceAutocompleteResult } from '@googlemaps/google-maps-services-js';

interface SearchEventsBoxProps {
  setSearchBoxModalOpen: (open: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
}

const SearchEventsBox: React.FC<SearchEventsBoxProps> = ({setSearchBoxModalOpen, setIsModalOpen}) => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestions, setSuggestions] = useState<PlaceAutocompleteResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const suggestionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter()


  useEffect(() => {
    const fetchSuggestions = async () => {
        if(isSubmitting) return; // Prevent fetching while submitting
        const results = await autoComplete(query);
        setSuggestions(results);
    };
    fetchSuggestions();
  }, [query]);

  useEffect(() => {
    suggestionsRef.current = suggestionsRef.current.slice(0, suggestions.length);
  }, [suggestions]);


  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;

    // Handle arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => {
        const newIndex = prev < suggestions.length - 1 ? prev + 1 : suggestions.length - 1;
        // Scroll the item into view if needed
        if (suggestionsRef.current[newIndex]) {
          suggestionsRef.current[newIndex]?.scrollIntoView({ block: 'nearest' });
        }
        return newIndex;
      });
    }
    
    // Handle arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => {
        const newIndex = prev > 0 ? prev - 1 : 0;
        // Scroll the item into view if needed
        if (suggestionsRef.current[newIndex]) {
          suggestionsRef.current[newIndex]?.scrollIntoView({ block: 'nearest' });
        }
        return newIndex;
      });
    }
    
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        // Select the highlighted suggestion but do not update the query state
        const selectedSuggestion = suggestions[selectedIndex];
        console.log('Selected via keyboard:', selectedSuggestion.description);
        setIsSubmitting(true);
        setSuggestions([]);
        setSelectedIndex(-1);
        router.push('/events?location=' + selectedSuggestion.description.replace(", USA", ""));
      } else {
        console.log('Submitted current query:', query);
        setIsSubmitting(true);
        setSuggestions([]);
        setSelectedIndex(-1);
        router.push('/events?location=' + query);
      }
    }
  };

  const handleSuggestionClick = async (suggestion: PlaceAutocompleteResult) => {
    setQuery(suggestion.description);
    setSuggestions([]);
    setSelectedIndex(-1);
    setIsSubmitting(true);
    if (inputRef.current) inputRef.current.blur();
    router.push('/events?location=' + suggestion.description.replace(", USA", ""))
  }

  return (
    <Box 
      margin="auto" 
      width="50%" 
    >
      <Flex 
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
      <Flex justify="center" mt={2} mb={4}>
        <Text textStyle="3xl" fontWeight="bold" color="black">Find Volunteering Events Near You</Text>
      </Flex> 
      
      {/* Search bar section */}
      <Flex 
        textAlign="center"
        direction="column"
        align="center"
        justify="center"
        position="relative"
        width="100%"
        px={3}
      >
        <InputGroup width="95%" endElement={<LuSearch color="black" cursor={"pointer"}/>}>
          <Input
            ref={inputRef}
            type="text"
            placeholder="Enter a location..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(-1); // Reset selected index on new input
              setSuggestions([]); // Clear suggestions on new input
            }}
            onKeyDown={handleKeyDown}
            bg="white"
            color="black"
            border="none"
            zIndex={2}
          />
        </InputGroup>
      
        {/* Suggestions section - attached to input */}
        {suggestions?.length > 0 && (
          <Box
            position="absolute"
            top="100%" // Slightly overlap with input
            width="91%"
            bg="white"
            color="black"
            boxShadow="0 4px 6px rgba(0,0,0,0.1)"
            zIndex={1}
            maxHeight="220px"
            overflowY="auto"
            borderTop="1px solid #f0f0f0"
          >
            {suggestions.map((suggestion, index) => (
              <Box
                key={index}
                padding="10px 15px"
                onMouseEnter={() => setSelectedIndex(index)}
                onMouseLeave={() => setSelectedIndex(-1)}                
                bg={selectedIndex === index ? "gray.200" : "white"}
                cursor="pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.description.replace(", USA", "")}
              </Box>
            ))}
          </Box>
        )}
        {isSubmitting && (
          <VStack mt={20}>
            <Spinner size="xl" color="white" />
            <Text color="white">Searching...</Text>
          </VStack>
        )}
      </Flex>
    </Box>
  );
};

export default SearchEventsBox;