import { IconButton } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import {FaSun, FaMoon, } from 'react-icons/fa'
import Header from './components/Header'
import Social from './components/Social'
import Projects from './components/Projects'
import { Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark"

  const bgColor = useColorModeValue("#ffffff", "#121212")

  return (
    <Flex bgColor={bgColor} direction="column">
      <Flex w="100%" p={5} justifyContent="flex-end">
          <IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Flex p={5} direction="column" w="100%">
        <Flex w="50%">
          <Box display="flex" pl={[10, 64]}>
            <Header />
            <Social />
          </Box>
        </Flex>
        <Flex alignSelf="flex-end" w="50%">
          <Projects />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
