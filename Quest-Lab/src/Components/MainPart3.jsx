import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import tick from "../Images/tick.png";
import front from "../Images/grid.png";
import grid1 from "../Images/grid1.png";
import '../Style/MainPart3.css'
const MainPart3 = () => {
  return (
    <div>
      <Box width={"80%"} margin={"auto"}>
        <Image
          borderRadius={"30px"}
          margin={"auto"}
          src={
            "https://images.ctfassets.net/xny2w179f4ki/uu0jmMNUUunVSwu5tmnOq/2a90fe4865a53ff619d18895340511ca/1-Automation_Hero-51523.png?w=1240&fit=thumb&fm=webp"
          }
        />
      </Box>
      <br />
      <br />
      <br />
      <Box
        
        className='flex_box_main_right'
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Image src={tick} width={"30px"} />
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.5px",
              lineHeight: "165%",
              marginLeft: "10px",
            }}
          >
            Dramatically reduce your support volume
          </span>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Image src={tick} width={"30px"} />
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.5px",
              lineHeight: "165%",
              marginLeft: "10px",
            }}
          >
            Solve issues anywhere, any time, in any language (coming soon)
          </span>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Image src={tick} width={"30px"} />
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.5px",
              lineHeight: "165%",
              marginLeft: "10px",
            }}
          >
            Provides safe, trustworthy answers
          </span>
        </Box>
      </Box>
      <br />
      <br />
      <Image src={front} />
      <br />
      <Image src={grid1} />
    </div>
  );
};

export default MainPart3;
