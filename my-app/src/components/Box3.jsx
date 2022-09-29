import React from "react";
import { HStack , Container ,Image, Box,Text} from '@chakra-ui/react';
export default function Box3(){
    return <Container maxW="20xl" p='4' marginTop='750px' maxH="55px" centerContent>
    <HStack spacing='30px'>
         <Box w='360px' h='30px'  bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" alt="jc" />
   
    
    </Box>
    <Box w='360px' h='30px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg" alt=""/>
    </Box>
    <Box w='360px' h='30px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/Dior_NOTB.jpg" alt=""/>
    </Box>
    </HStack>
    <HStack  marginTop='220px' spacing='30px'>
         <Box w='360px' h='30px'  bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/ABH_NOTB_NouveauPalette1.jpg" alt="jc" />
   
    
    </Box>
    <Box w='360px' h='30px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/14-sep-2022/Hudabeauty_NOTB.jpg" alt=""/>
    </Box>
    <Box w='360px' h='30px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_NOTB.jpg" alt=""/>
    </Box>
    </HStack>
    <Image  marginTop='220px'src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" alt=""/>
    <HStack  marginTop='50px' spacing='30px'>
         <Box w='360px' h='30px'  bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" alt="jc" />
    <Text marginLeft='25px' marginTop='20px' fontWeight='700'>MAKING A LOOK</Text>
    <Text marginLeft='25px' fontWeight='280'>With Anaita Shroff Adajania</Text>
    </Box>
    <Box w='360px' h='30px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" alt=""/>
    <Text marginLeft='25px' marginTop='20px' fontWeight='700'>7 MASKS</Text>
    <Text marginLeft='25px' fontWeight='280'>that'll save your skin</Text>

    </Box>
    <Box w='360px' h='30px' bg=''>
    <Image src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" alt=""/>
    <Text marginLeft='25px' marginTop='20px' fontWeight='700'>LONG LASTING MAKEUP?</Text>
    <Text marginLeft='25px' fontWeight='280'>Here's how!</Text>
    </Box>
    </HStack>

    </Container>
    
}