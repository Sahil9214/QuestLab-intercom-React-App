import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text, Divider } from "@chakra-ui/react";
import "../Style/ModalBody.css";
import right from "../Images/right-arrow.png";
import sidebar from "../Images/sidebar.png";
import home from "../Images/home.png";
import news1 from "../Images/news.png";
import news2 from "../Images/news2.png";
import news3 from "../Images/news3.png";
import Help123 from '../Images/help.png'
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Home from "./Body/Home";
import Message from "./Body/Message";
import Help from "./Body/Help";
import News from "./Body/News";
import home1 from "../Images/home.png";
import news12 from '../Images/news3.png'
import message12 from '../Images/news2.png'
import help123 from '../Images/help.png'
const ModalBodyContent = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [val, setVal] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`https://aware-lion-miniskirt.cyclic.app`);
      console.log("res", res.data);
      console.log("datd", res.data);
      setText(res.data);

      setLoading(true);
    } catch (err) {
      console.log("err", err);
      setError(true);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post(`https://aware-lion-miniskirt.cyclic.app/add`, { val });
    } catch (err) {
      console.log("err", err);
    }
    setVal("");
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <Image src={home1} width={"30px"} />
            <br />
            <Text>Home</Text>
          </Tab>
          <Tab>
            <Image src={news12} width={"30px"} />
            <br />
            <Text>News</Text>
          </Tab>
          <Tab>
            <Image src={message12} width={"30px"} />
            <br />
            <Text>Message</Text>
          </Tab>
          <Tab>
            <Image src={help123} width={"30px"} />
            <br />
            <Text>Help</Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Home/>
          </TabPanel>
          <TabPanel>
            <News/>
          </TabPanel>
          <TabPanel>
            <Message/>
          </TabPanel>
          <TabPanel>
            <Help/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ModalBodyContent;
