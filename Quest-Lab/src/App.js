import logo from "./logo.svg";
import "./App.css";
import { Image } from "@chakra-ui/react";
import heading from "./Images/heading.png";
import Navbar from "./Components/Navbar";
import MainPart from "./Components/MainPart";
import MainPart3 from "./Components/MainPart3";
import MainPart2 from "./Components/MainPart2";
import MainPart4 from "./Components/MainPart4";
import MainPart5 from "./Components/MainPart5";
import Footer from "./Components/Footer";
import ModalBodyContent from "./Components/ModalBodyContent";
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
} from "@chakra-ui/react";
import comment from "./Images/comment.png";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        style={{
          float: "right",
          position: "fixed",
          top: "400px",
          zIndex: 1,
          marginLeft: "690px",
          padding: "17px 0px",
          backgroundColor: "#fff",
        }}
        float={"right"}
        onClick={onOpen}
      >
        <Image src={comment} width={"80px"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message Added</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Image src={heading} alt="heading" width={"100%"} />
      <Navbar />
      <MainPart />
      <br />
      <MainPart2 />
      <MainPart3 />
      <MainPart4 />
      <MainPart5 />
      <Footer />
      <BasicUsage />
    </div>
  );
}

export default App;
