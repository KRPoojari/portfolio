import { IconButton } from '@chakra-ui/button'
import { Flex, Spacer, VStack } from '@chakra-ui/layout'
import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import {FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFile} from 'react-icons/fa'
import Header from './components/Header'
import Profile from './components/Profile'


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark"

  return (
    <VStack p={5}>
      <Flex w="100%">
        
        
        <Spacer></Spacer>
        <IconButton ml="2" icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaEnvelope />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaTwitter />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="2" icon={<FaFile />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        
      </Flex>
      <Flex w="100%">
        <Header />
        <Profile />
      </Flex>
    </VStack>  
  )
}

export default App
