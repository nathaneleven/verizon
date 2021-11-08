import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import LogoHeader from '../atoms/Logo'
import TelephoneHeader from '../atoms/TelephoneHeader'

const  Header = () => {
return (
<>
    <Box p="5px" border="1" bgColor="black" align="center">
        <Flex maxW="1272px" justify="center">
        <LogoHeader />
        <Spacer />
        <TelephoneHeader />
        </Flex>
    </Box>
</>
)
}

export default Header
