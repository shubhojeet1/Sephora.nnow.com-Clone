import { HStack, Button , Container ,Image} from '@chakra-ui/react';
import React from 'react';
export default function AfButton() {
    return<Container maxW='8xl' centerContent>
            <HStack>
            <Button h='20' bg='black' color='white'>STEALS & DEALS</Button>
            <Button h='20' bg='black' color='white'>BEAUTY MINIS</Button>
            <Button h='20' bg='black' color='white'>EVERYDAY ESSENTIALS</Button>
            <Button h='20' bg='black' color='white'>TRENDING NOW</Button>
            <Button h='20' bg='black' color='white'>EDITOR'S PICK</Button>
            <Button h='20' bg='black' color='white'>TOP FRAGRANCES</Button>
            </HStack>
            <Image marginTop='20' src="https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/SephoraBrandoftheweektext3310x240(1).jpg" alt="monu"/>
            <Image maxW='5xl' src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweekdesktop.jpg' alt=''/>
        </Container>
}