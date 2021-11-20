import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout';
import React from 'react'


function Header() {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
        <Flex justifyContent="flex-start" position={["absolute", "fixed"]}>
            <Box>
                <Text fontSize="5xl" fontWeight="semibold">Hello, I am </Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Kartik</Text>
                <Spacer />
                <Box maxW="600px">
                    <Text fontSize="md" >
                        A Third Year Computer Engineering Undergrad. 2+ years of hands-on experience with designing, developing and implementing web applications using a wide range of technologies and programming languages.<br /> Currently exploring Databases and Backend Engineering and looking for  Internship Opportunities.
                    </Text>
                </Box>
            </Box>
        </Flex> 
    )
}

export default Header
