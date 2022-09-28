import { HStack,Box, Container ,Text} from "@chakra-ui/react";
import { BsFileArrowDown } from 'react-icons/bs'
import { FiPackage } from 'react-icons/fi'
import { VscLocation } from 'react-icons/vsc'
import { AiOutlineTrophy } from 'react-icons/ai'

// import {IconContext}from"react-icons"
export default function Navbar(){
    return <Container maxW="10xl" p='4' maxH="55px" bg="#F3F3F3"  centerContent>
         <HStack spacing='24px'>
         <Box w='100px' h='40px' bg=''color='#000000'>
    <img src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png" alt="" />
    </Box>
    <Box w='40px' h='40px' bg=''color='#000000'>
    <Text fontWeight='190' lineHeight='10'>|</Text>
    </Box>
    <Box w='140px' h='40px' bg='' color='#000000'>
      <HStack>
       <VscLocation color='#FF3399' size={23}  /><Text lineHeight='10' fontWeight='190'>Store Locator</Text>
        </HStack>
    </Box>
    <Box w='40px' h='40px' bg=''color='#000000'>
    <Text fontWeight='190' lineHeight='10'>|</Text>
    </Box>
    <Box w='338px' h='40px' bg=''color='#000000'>
      <Text lineHeight='1.3' fontSize='14' fontWeight='190'>Get 10% OFF on your first purchase.Use Code:
      BEAUTY10</Text> 
    </Box>
    <Box w='94px' h='40px' bg=''color='#000000'>
    <HStack><BsFileArrowDown color='#FF3399' /><Text lineHeight='10' fontWeight='190'>Get App</Text></HStack>
    </Box>
    <Box w='40px' h='40px' bg=''color='#000000'>
    <Text fontWeight='190' lineHeight='10'>|</Text>
    </Box>
    <Box w='120px' h='40px' bg=''color='#000000'>
    <HStack><FiPackage color='#FF3399' /><Text lineHeight='10' fontWeight='190'>Track Order</Text></HStack>
    </Box>
    <Box w='40px' h='40px' bg=''color='#000000'>
    <Text fontWeight='190' lineHeight='10'>|</Text>
    </Box>
    <Box w='85px' h='40px' bg=''color='#000000'>
    <HStack><AiOutlineTrophy color='#FF3399' /><Text lineHeight='10' fontWeight='190'>Loyalty</Text></HStack>
    </Box>
    
  </HStack>
    </Container>
   
}