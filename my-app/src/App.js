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

function App() {
  return (
<ChakraProvider theme={theme}>
      <Navbar/>
      <SecondNav/>
      <Carousel/>
    </ChakraProvider> 
  );
}

export default App;