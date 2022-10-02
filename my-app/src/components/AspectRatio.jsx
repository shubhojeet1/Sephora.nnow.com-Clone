import React from "react";


import { Box,Flex,IconButton } from "@chakra-ui/react";
import {GrVolume} from "react-icons/gr"
import {GiExitDoor} from "react-icons/gi"

import { Player } from "./Player";


 export default function YoutubeVideo(){
    return <Flex color="white" direction="column">
    <Flex justifyContent="center" flex="5">
      <Box pos="relative" h="100%" w="100%">
        <Player url="hhttps://youtu.be/0S3OylWkYwM" preload="none" autoPlay="false"/>
      </Box>
    </Flex>
    <Flex
      justifyContent="space-around"
      alignItems="center"
      flex="1"
      padding="2vmax"
    >
      <IconButton
        aria-label="Search database"
        icon={<GrVolume color="black" size="2vmax" />}
      />
      <IconButton
        aria-label="Search database"
        icon={<GiExitDoor color="black" size="2vmax" />}
      />
    </Flex>
  </Flex>
 }

 