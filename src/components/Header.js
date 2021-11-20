import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'


function Header() {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    const { SmallerScreen } = useMediaQuery();
    const isSmallerScreen = SmallerScreen === "(min-width:600px)"
    
    return (
        <Flex justifyContent="flex-start" position="fixed">
            <Box>
                <Text fontSize="5xl" fontWeight="semibold">Hello, I am </Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Kartik</Text>
                <Spacer />
                <Box maxW="600px">
                    <Text fontSize="md" >
                        A Third Year Computer Engineering Undergrad. Currently exploring Databases and Backend Engineering. 
                    </Text>
                </Box>
            </Box>
        </Flex> 
    )
}

export default Header
