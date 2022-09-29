import React from "react";
import { HStack , Container ,Image, Box} from '@chakra-ui/react';
export default function Box1(){
    return <Container maxW="20xl" p='4' marginTop='50px' maxH="55px" centerContent>
      
    <Image marginTop='340px' w='83%' src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt=""/>
    <Image marginTop='90px' w='83%' src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/Sephora_HeaderStrip_AutumnFavourites_3310x240.jpg" alt=""/>
    <HStack spacing='30px'>
         <Box w='360px' h='80px'  bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/BurntBlush.jpg" alt="jc" />
   
    
    </Box>
    <Box w='360px' h='80px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/LoadedLashes.jpg" alt=""/>
    </Box>
    <Box w='360px' h='80px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/CoolJewels.jpg" alt=""/>
    </Box>
    </HStack>
    <Image marginTop='350px' w='83%' src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_3_DESK.jpg" alt=""/>
    </Container>
    
}