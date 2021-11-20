import { IconButton } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFile } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/react'


function Social() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark"

    const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

    return (
        <Flex position="fixed" bottom="16" w="50%" pl={64} justifyContent="flex-start">
            <IconButton ml="2" size="lg" icon={<FaGithub />} isRound="true" onClick={()=> window.open("https://github.com/KRPoojari", "_blank")}></IconButton>
            <IconButton ml="4" size="lg" icon={<FaLinkedin />} isRound="true" onClick={()=> window.open("https://www.linkedin.com/in/kartik-poojari-74250b201/", "_blank")}></IconButton>
            <IconButton ml="4" size="lg" icon={<FaEnvelope />} isRound="true" onClick={()=> window.open("mailto:kartikpoojari109@gmail.com")}></IconButton>
            <IconButton ml="4" size="lg" icon={<FaTwitter />} isRound="true" onClick={()=> window.open("https://twitter.com/imKRPoojari", "_blank")}></IconButton>
            <IconButton ml="4" size="lg" icon={<FaFile />} isRound="true" onClick={()=> window.open("https://github.com/KRPoojari/resume/blob/main/Nov2021/Resume.pdf", "_blank")}></IconButton>
        </Flex>
    )
}

export default Social
