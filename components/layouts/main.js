import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ( { children, router } ) => {
  return (
    <Box as="main" pb={8}>
      <Head> 
        <meta name="viewport" content="width=devide=width, initial-scale=1" /> 
        <title>Rebecca Combs - Homepage</title> 
      </Head> 

      <Navbar path={router.asPath} /> 

      <Container maxW="container.xl" pt={20}> 
        {children} 
      </Container> 
    </Box> 
  )
}

export default Main 
