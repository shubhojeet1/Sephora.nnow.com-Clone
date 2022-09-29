import { AbsoluteCenter } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from'react-player'
   export  const Player = ({ url }) => {
       return  <div className="player-wrapper" style={{position:"relative",paddingTop:"56.25%"}}>
          <ReactPlayer
            url={url}
            className="react-player"
            playing
            
            width="80%"
            height="50%"
            style={{position:"absolute",
            
        left:"0",marginLeft:"10%" }}
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  showinfo: 0,
                  modestbranding: 1,
                  fs: 0,
                  disablekb: 1,
                  host: "http://www.youtube.com",
                },
              },
            }}
          />
        </div>
      };
 