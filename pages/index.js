import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue} from '@chakra-ui/react' 
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = ( ) => {
  return(
    <Container maxW="container.xl"> 
    <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
      Hello, I&apos;m a data science researcher at Duke University/DKU!
    </Box> 
    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title"> 
        Rebecca Combs
        </Heading>
        <p>Computer Science Major ( Computational Biology / Web Development )</p>
      </Box>
      <Box 
      flexShrink={0} 
      mt={{base: 4, md: 0}} ml={{md: 6}} 
      align="center"
      >
        <Image 
        borderColor-="whiteAlpha.800" 
        borderWidth={2} 
        borderStyle="solid" 
        maxWidth="100px" 
        display="inline=block" 
        borderRadius="full" 
        src="/images/takuya.jpg" 
        alt="Profile Image"
        /> 
        </Box> 
    </Box>

    <Section delay={0.1}> 
    <Heading as="h3" variant="section-title">
      Work
    </Heading>
    <Paragraph>Seeking to participate in research and development for new 
      analytical technologies in AI, hybrid cloud, business transformation, 
      and next generation services. I have proven programming skills with a 
      background in computer science, AI, and optimization. I have the ability
       to analyze and debug problems. I have demonstrated verbal and written 
       communication skills. Check out my{' '}
       <NextLink href="https://www.frontiersin.org/articles/10.3389/fgene.2021.764170/full">
         <Link>publication</Link></NextLink>.</Paragraph>
         <Box align="left" my={4}>
           <NextLink href="/works">
             <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
               My portfolio
             </Button>
           </NextLink>
         </Box>
    </Section>
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>2003</BioYear>
        Born in The Bronx, NY. 
      </BioSection>
      <BioSection>
        <BioYear>2018</BioYear>
        Researched Human Color Memory at MIT.   
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        Led FIRST Robotics Team #6731 to victory at the FIRST North East District Regional Competition.  
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Completed genomics/data science research at MGH and Harvard Medical School, graduated HS from the Winsor School.  
      </BioSection>
      <BioSection>
        <BioYear><em>Present</em></BioYear>
        Studying CS at Duke University/DKU. Learning front-end web development and ML. 
      </BioSection>
    </Section>
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I ♥
      </Heading>
      <Paragraph>
        Drawing, {' '} <Link href="https://soundcloud.com/rdca">Singing Covers</Link>, 
        Music, {' '} <Link href="https://youtu.be/qJYHLgyvJc4">Sailing</Link>, 
        object oriented programming, HTML/CSS, and vim.
      </Paragraph> 
    </Section>
    </Container> 
  )
}

export default Page
