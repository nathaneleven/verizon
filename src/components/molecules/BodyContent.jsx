import { Box } from '@chakra-ui/layout'
import React from 'react'
import About from '../organisms/About'
import Cta from '../organisms/Cta'
import CtaFooter from '../organisms/CtaFooter'
import Plans from '../organisms/Plans'
import Services from '../organisms/Services'


const  BodyContent = () => {
    return (
    <>
    <Box>
      <Cta />
      <Plans/>
      <About/>
      <Services/>
      <CtaFooter/>
    </Box>
    </>
    )}

export default BodyContent