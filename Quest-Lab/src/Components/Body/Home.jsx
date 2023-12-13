import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import "../../Style/Home.css";
import right from '../../Images/right-arrow.png';
import sidebar from '../../Images/sidebar.png'
const Home = () => {
  return (
    <div>
      <Box className="home">
        <Box className="home1_box">
          <Image
            width={"40px"}
            src="https://downloads.intercomcdn.com/i/o/355439/a7cdd3705c65918af17f3ce0/1bb87d41d15fe27b500a4bfcde01bb0e.png"
          />
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Image
              width={"40px"}
              borderRadius={"50%"}
              src={
                "https://static.intercomassets.com/avatars/5818147/square_128/Screenshot_2022-11-21_151618-1673243950.png"
              }
            />
            <Image
              width={"40px"}
              borderRadius={"50%"}
              src={
                "https://static.intercomassets.com/avatars/5544317/square_128/5544317-1665143578.jpg"
              }
            />
            <Image
              width={"40px"}
              borderRadius={"50%"}
              src={
                "https://static.intercomassets.com/avatars/4593249/square_128/4593249-1665142876.jpg"
              }
            />
          </Box>
        </Box>
        
        
        <h1 className='home_h1_tag'>
          Hello there.
          <br />
          How can we help?
        </h1>
        
        <Box padding={'12px'}>
        <Box className='home_box1_message'>
        <Box>
        <h3 style={{fontWeight:"700"}}>Send up message</h3>
        <p>we typically reply within a day</p></Box>
        <Box>
            <Image src={right} width={'20px'} />
        </Box>
      </Box>
      </Box>
      </Box>
      
     
      <Box>
        <Image src={sidebar} />
      </Box>
      
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </div>
  );
};

export default Home;
