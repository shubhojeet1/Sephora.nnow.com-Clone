import React from 'react';
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Navbar from './components/Navbar';
import SecondNav from './components/SecondNav'
import ThirdNav from './components/ThirdNav'
import Carousel from './components/Carousel';
import AfButton from './components/AfButton'
import Box1 from './components/Box1'
import YoutubeVideo from './components/AspectRatio'
import Box2 from './components/Box2'
import Onsale from './components/Onsale'
import Box3 from './components/Box3'
// import Scrollup from './components/Scrollup';
import Email from './components/Email'
import OddText from './components/OddText';


function App() {
  return (
<ChakraProvider theme={theme}>
      <Navbar/>
      <SecondNav/>
      <ThirdNav/>
      <Carousel/>
      <AfButton/>
      <Box1/>
      <YoutubeVideo/>
      <Box2/>
      <Onsale/>
      <Box3/>
      {/* <Scrollup/> */}
      <Email/>
      <OddText/>
    </ChakraProvider> 
  );
}

export default App;
