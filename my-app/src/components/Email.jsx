import React from "react";
import { HStack , Container ,Image, Box,Text,Button,Input} from '@chakra-ui/react';
export default function Email(){
    return <Container maxW="20xl" p='4' marginTop='1150px' h={170} bg='#F3F3F3' centerContent>
         <Button size='md' fontWeight='400' bottom='10' bg='greenyellow'>^ BACK TO TOP</Button>
       
    <HStack >
    <Text fontSize='3xl' marginTop='20px' fontWeight='700' letterSpacing='wider'>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</Text>
    </HStack>
    <HStack>
        <Input type='Text' bg='white' size='lg' w='lg' placeholder="Enter your email address"></Input><Button bg='black' color='white'>Subscribe</Button>
    </HStack>
    </Container>
}