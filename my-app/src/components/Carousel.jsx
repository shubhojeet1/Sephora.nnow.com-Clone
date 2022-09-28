import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import {  AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://logan.nnnow.com/content/dam/nnnow-project/20-sep-2022/Mac_Topbannerdesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_TopBannerdesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/01-sep-2022/Sephora_TopBanner_PrepPlease_Desktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/15-sep-2022/Sephora_Homepagebanner_kajaldesktop.jpg',
    'https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/se/TooFaced_TopBannerdesktop.jpg',
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      marginTop="40"
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        bg="#C7B299"
        _hover={{ color:"white",
        bg:"#C7B299"}}
        position="absolute"
        left={side}
        top={top}
        transform={'translate(-20%, -200%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        < AiOutlineArrowLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        bg="#C7B299"
        // borderRadius="full"
        position="absolute"
        _hover={{ color:"white",
        bg:"gray"}}
        right={side}
        top={top}
        transform={'translate(20%, -200%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        < AiOutlineArrowRight />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}