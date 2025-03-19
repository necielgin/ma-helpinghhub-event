"use client";
import {
    Flex,
    Stack,
    Heading,
    Text,
    Box,
    HStack,
    Input,
    InputGroup,
    Button,
    Link
} from '@chakra-ui/react';
import { FormControl,FormLabel } from '@chakra-ui/form-control'
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState } from 'react'

const IndividualSignUp = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
        <Stack mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} color={'black'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up as an individual
          </Heading>
          <Text fontSize={'lg'}>
            to participate in volunteering events
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          color={'white'}
          p={8}
          bg={'rgba(238, 230, 213, 0.33)'}>
             <Stack>
                <HStack>
                <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" size={"xl"}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text"  size={"xl"}/>
                </FormControl>
                </Box>
                </HStack>
                <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email"  size={"xl"}/>
                </FormControl>
                <FormControl id="phone-number">
                <FormLabel>Phone Number</FormLabel>
                <Input type="phone"  size={"xl"}/>
                </FormControl>
                <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup endElement={
                <Button
                  h={'1.75rem'}
                  size={'sm'}
                  bg={'none'}
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </Button>
              }>
                <Input type={showPassword ? 'text' : 'password'}  size={"xl"}/>
              </InputGroup>
            </FormControl>
            <Stack pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text color={'black'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
             </Stack>
          </Box>
        </Stack>
      </Flex>
    )
    }


export default IndividualSignUp;