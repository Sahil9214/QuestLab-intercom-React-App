import React, { useEffect, useState } from "react";
import "../../Style/help.css";
import { Box, Text, Divider, Input, Button, Image } from "@chakra-ui/react";
import axios from "axios";
import send from "../../Images/send.png";
const Message = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleMessage = async () => {
    let obj = {
      id: Date.now(),
      msg,
    };
    try {
      axios.post(`https://zany-jade-seal-wrap.cyclic.app/message`, obj);
    } catch (err) {
      console.log("err", err);
    }
  };
  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios(`https://zany-jade-seal-wrap.cyclic.app/message`);
      setLoading(false);

      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", data);
  return (
    <div>
      <Box className="help_box" borderRadius={"20px"}>
        <Text className="help_text" textAlign={"center"}>
          Messages
        </Text>
        <br />
        <br />
      </Box>
      <br/>
      <Box width={'80%'} margin={'auto'}>
        {
          data?.length>0 &&data?.map((el)=>{
            return(
              <div key={el.id}>
                <h2 style={{fontSize:"20px",fontWeight:"600"}}>{el.msg}</h2>
                <br/>
                <Divider/>
              </div>
            )
          })
        }
      </Box>
      <br/>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Input
          style={{ padding: "12px 0px" }}
          onChange={(e) => setMsg(e.target.value)}
        />
        <Button onClick={handleMessage}>
          <Image src={send} width="30px" />
        </Button>
      </Box>
    </div>
  );
};

export default Message;
