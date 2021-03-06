import React from 'react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { motion } from "framer-motion"
import { Box, Flex, Spacer } from '@chakra-ui/layout'

function Projects() {

    const bg = useColorModeValue("gray.200", "#1f1f1f")
    const MotionBox = motion(Box)

    return (  
        <Flex direction="column">
            <MotionBox mb="1" p={10} maxWidth="600px" bg = {bg} whileHover={{ scale: 1.1 }}>
                <Box fontSize="xs">
                    PYTHON | FLASK | REACT
                </Box>
                <Box mt="2" mb="2" fontWeight="semibold" fontSize="2xl" >
                    TorrPydo
                </Box>
                <Box fontSize="sm">
                    A torrent client built with Python
                </Box>
            </MotionBox>
            <Spacer />
            <MotionBox mb="1" p={10} maxWidth="600px" bg={bg} whileHover={{ scale: 1.1 }}>
                <Box fontSize="xs">
                    WEB3 | SOLIDITY | REACT
                </Box>
                <Box mt="2" mb="2" fontSize="2xl" fontWeight="semibold">
                    Wave
                </Box>
                <Box fontSize="sm">
                    A 2-week learning project which helped in learning some Solidity, write+deploy a smart contract to Blockchain and build a Web3 client app to interact with the deployed smart contract
                </Box>
            </MotionBox>
            <Spacer />
            <MotionBox mb="1" p={10} maxWidth="600px" bg={bg} whileHover={{ scale: 1.1 }}>
                <Box fontSize="xs">
                    WEB | ARDUINO
                </Box>
                <Box mt="2" mb="2" fontSize="2xl" fontWeight="semibold">
                    ALBS
                </Box>
                <Box fontSize="sm">
                    An IoT based solution built using Arduino UNO and a Web Dashboard to power rapid response to road accidents
                </Box>
            </MotionBox>
            <Spacer />
            <MotionBox p={10} maxWidth="600px" bg={bg} whileHover={{ scale: 1.1 }}>
                <Box fontSize="xs">
                    UI DESIGN | FIGMA
                </Box>
                <Box mt="2" mb="2" fontSize="2xl" fontWeight="semibold">
                    Amazon Website Redesign
                </Box>
                <Box fontSize="sm">
                    An attempt to completely revamp the looks of the Amazon.com website and make it more clear and less cluttery
                </Box>
            </MotionBox>
        </Flex>
            
    )
}

export default Projects
