import { Container, Box, Heading} from '@chakra-ui/react' 
const Page = ( ) => {
  return(
    <Container> 
    <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
      Hello, I&apos;m a data science researcher at Duke University/DKU!
    </Box> 
    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title"> 
        Rebecca Combs
        </Heading>
        <p>Computer Science Major ( Computational Biology / Web Development )</p>
      </Box>
    </Box>
    </Container> 
  )
}

export default Page
