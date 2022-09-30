import React from "react";
import { HStack , Container ,Image, Box,Text,Button,Input} from '@chakra-ui/react';
import { useEffect } from "react";
export default function Email(){
    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            // setShowButton(true);
          } else {
            // setShowButton(false);
          }
        });
      }, []);
    
      // This function will scroll the window to the top 
    //   const scrollToTop = () => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth' // for smoothly scrolling
    //     });
    //   };
    const topScroll = () => {
        // alert("workingh")
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
    } 
    return <Container maxW="20xl" p='4' marginTop='1150px' h={170} bg='#F3F3F3' centerContent>
         <Button size='md' onClick={topScroll} fontWeight='400' bottom='10' bg='greenyellow'>^ BACK TO TOP</Button>
       
    <HStack >
    <Text fontSize='3xl' marginTop='20px' fontWeight='700' letterSpacing='wider'>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</Text>
    </HStack>
    <HStack>
        <Input type='Text' bg='white' size='lg' w='lg' placeholder="Enter your email address"></Input><Button bg='black' color='white'>Subscribe</Button>
    </HStack>
    </Container>
}