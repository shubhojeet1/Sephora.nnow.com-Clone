import { Container ,Box ,Text,Input,Button ,Divider,Link} from '@chakra-ui/react'
import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"
import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'


const Login = ({setLoginPopup}) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider()

  const [{user}, dispatch] = useStateValue()

  const signinWithGoogle = async () => {
    const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)

    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    })

    console.log("resp :-", user)

    if(user){
      setLoginPopup(true);
    }else{
      setLoginPopup(false);
    }
    
  }
  return (
    <>
        <Container maxW='100vw' height='100%' bg='rgba(0, 0, 0, 0.8)' position='fixed' top='0' left='0' zIndex='9999' display='flex' alignItems='center' justifyContent='center'>
                <Box bg='white' w='400px' padding='20px' position='relative'>
                    <Box position='absolute' right='10px' top='10px' _hover={{ color: '#FF3399' }} >
                        <AiOutlineClose   onClick={() => setLoginPopup(false)}/>  
                    </Box>
                    <Box>
                        <Text marginLeft='135px' fontSize='3xl' >LOGIN</Text>
                    <Text marginTop='20px' fontWeight='240'>Enter your Phone / Email</Text>
                    <Input type='text'></Input>
                    <Button w={80} marginLeft='20px' bg='#FF3399' border='none'marginTop='30px'><Text color='white'>CONTINUE</Text></Button>
                    <Divider />
                    <Text mt='45px' ml='165px' textDecorationLine=''>OR</Text>
                    <Button bg='#4285F4' w={80} ml='20px' mt='40px' onClick={signinWithGoogle}><FcGoogle /><Text color='white' ml='10px' >Continue with Google</Text></Button>
                    <Button bg='#3B5998' w={80} ml='20px' mt='10px'><FaFacebookSquare/><Text color='white' ml='10px'>Continue with Facebook</Text></Button>
                    <Text mt='65px'fontWeight='230' textAlign='center'>By proceeding, you agree to <Link color='#FF3399'textDecoration='underline' >Privacy Policy,</Link></Text>
                    <Text fontWeight='230' textAlign='center' textDecoration='underline' color='#FF3399'> Terms & Conditions</Text>

                    </Box>
                </Box>
        </Container>
    </>
  )
}

export default Login