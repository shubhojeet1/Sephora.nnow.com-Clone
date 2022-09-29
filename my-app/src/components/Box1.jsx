import React from "react";
import { HStack , Container ,Image, Box,Text} from '@chakra-ui/react';
export default function Box1(){
    return <Container maxW="20xl" p='4' maxH="55px"  centerContent>
       <HStack spacing='30px'  marginTop='140px'>
         <Box w='320px' h='80px'  bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileEye.jpg" alt="jc" />
    <Text fontWeight='230' marginLeft='140px'>EYES</Text>
   
    
    </Box>
    <Box w='320px' h='80px' bg='' >
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileLips.jpg" alt=""/>
    <Text fontWeight='230' marginLeft='140px'>LIPS</Text>
    </Box>
    <Box w='320px' h='80px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileFace.jpg" alt=""/>
    <Text fontWeight='230' marginLeft='140px'>FACE</Text>
    </Box>
    </HStack>
    <Image marginTop='360px' src="https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg" alt=""/>
    </Container>
    
}