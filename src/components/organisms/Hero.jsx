import React from 'react'
import { Flex, Box, Heading, List, ListIcon, ListItem, Spacer, AspectRatio, Stack } from '@chakra-ui/layout'
import { CheckIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'

const Hero = () => {
    return (
        <>
        <Stack w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box h="100%" w={["100%","100%","100%","100%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","8"]}  w={["100%","80%","80%","70%","75%"]} m="auto">
            <Heading as="h1" mb="24px">
            Verizon – Your high-speed Internet provider
            </Heading>
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    100% fiber-optic network 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Reliability 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color="Black.500" />
                    Powerful connectivity 
                </ListItem>
            </List>
        </Box>
        </Box>
        <Spacer/>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} justify="flex-end">
        <AspectRatio w={["100%","100%","100%","100%","3xl"]} mt={["-10px"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{md: "0 0 0 70px"}} src="/hero-image-verizon.jpg" alt="Hero Image Verizon" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default Hero
