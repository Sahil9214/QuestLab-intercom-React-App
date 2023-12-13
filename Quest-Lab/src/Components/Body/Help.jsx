import React from "react";
import { Box, Image, Flex, Text, Input,Divider } from "@chakra-ui/react";
import "../../Style/help.css";
import search from '../../Images/search.png'
const Help = () => {
  return (
    <div>
      <Box className='help_box' borderRadius={"20px"}>
        <Text className="help_text" textAlign={"center"}>
          Help 
        </Text>
        <br />
        <br />
        <Box padding={"12px"} margin={"auto"} width={"80%"} display={'flex'}>
          <Input className="input" />
          <Image src={search} width={'30px'}/>
        </Box>
      </Box>
      <br/>
      <br/>
      <Box style={{padding:"12px 0px"}}>
        <h2>18 collection</h2>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}>
        <h2>Interview Overiew</h2>
        <br/>
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}>
        <h2>help Desk</h2>
        <br/>
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}>
        <h2>Getting Started</h2>
        <br/>
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}>
        <h2>AI chatbot</h2>
        <br/>
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"12px 0px"}}>
        <h2>Productive Support</h2>
        <Divider/>
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      
     
    </div>
  );
};

export default Help;
