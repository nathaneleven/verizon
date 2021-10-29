import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import LogoHeader from '../atoms/Logo'
import TelephoneHeader from '../atoms/TelephoneHeader'

const  Header = () => {
return (
<>
    <Flex p="5px" border="1" bgColor="black" justify="center">
        <LogoHeader />
        <TelephoneHeader />
    </Flex>
</>
)
}

export default Header
