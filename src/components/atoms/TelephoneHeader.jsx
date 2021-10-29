import { Box } from '@chakra-ui/layout'
import { PhoneIcon } from '@chakra-ui/icons'
import React from 'react'

const TelephoneHeader = () => {
  return (
    <>
    <Box border="1px solid white" display="flex" alignItems="center">
      <Box>
        <PhoneIcon color="#fff" />
      </Box>
      <Box margin="5px" color="#FFF" fontWeight="700">
        1 (833) 980-3434
      </Box>
    </Box>
    </>
  )
}

export default TelephoneHeader
