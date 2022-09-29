import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import SecondNav from './components/SecondNav'
import Carousel from './components/Carousel';
import AfButton from './components/AfButton'
import Box1 from './components/Box1'
import YoutubeVideo from './components/AspectRatio'
import Box2 from './components/Box2'
import Onsale from './components/Onsale'
import Box3 from './components/Box3'
import Email from './components/Email'

function App() {
  return (
<ChakraProvider theme={theme}>
      <Navbar/>
      <SecondNav/>
      <Carousel/>
      <AfButton/>
      <Box1/>
      <YoutubeVideo/>
      <Box2/>
      <Onsale/>
      <Box3/>
      <Email/>
    </ChakraProvider> 
  );
}

export default App;
