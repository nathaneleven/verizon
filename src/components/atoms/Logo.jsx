import React from 'react'
import { Image } from 'next/image'
import { Box } from '@chakra-ui/layout'

const LogoHeader = () => {
  return (
    <>
    <Box border="1px solid white" w="50%">
      <img src="/verizon-logo.svg" />
    </Box>
    </>
  )
}

export default LogoHeader
