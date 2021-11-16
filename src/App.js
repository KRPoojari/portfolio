import { IconButton } from '@chakra-ui/button'
import { Flex, Heading, Spacer, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import {FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa'
import Header from './components/Header'
import Profile from './components/Profile'

function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark"

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight="semibold" color="cyan.400">Hello Friend</Heading>
        
        <Spacer></Spacer>
        <IconButton ml="2" icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaEnvelope />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaTwitter />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        <Header />
        <Profile />
      </Flex>
    </VStack>  
  )
}

export default App
