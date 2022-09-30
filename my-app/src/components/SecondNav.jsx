import { HStack, Box, Container, Text, Image, Input, Button } from "@chakra-ui/react";
// import { BsFileArrowDown } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Login from "./Login";
import { useState } from "react";

// import {IconContext}from"react-icons"
export default function SecondNav() {

  const [loginpopup, setLoginpopup] = useState(false)
 
  return (
    <>
      <Container maxW="10xl" p='4' maxH="55px" bg="" centerContent>
        <HStack spacing='190'>

          <HStack><FiSearch color='#FF3399' /><Input type="text" placeholder="Search SEPHORA" /></HStack>



          <Image maxW="2xs" src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="" />


          <HStack spacing="2">
            <MdFavoriteBorder color='#FF3399' /><Text lineHeight='10' fontWeight='190'></Text>


            <Text fontWeight='190' lineHeight='10'>|</Text>


            <HiOutlineShoppingBag color='#FF3399' /><Text lineHeight='10' fontWeight='190'></Text>


            <Text fontWeight='190' lineHeight='10'>|</Text>



            <FaRegUser color='#FF3399' size={16} /><Button fontWeight={250} bg='white' _hover={{ color: '#FF3399' }} onClick={() => setLoginpopup(true)}>Login</Button>
          </HStack>


        </HStack>
      </Container>

      {
        loginpopup && (
          <Container>
            <Login setLoginPopup={setLoginpopup}/>
          </Container>
        )
      }
      
    </>
  )



}