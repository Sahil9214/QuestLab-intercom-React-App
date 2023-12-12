import logo from "./logo.svg";
import "./App.css";
import { Image } from "@chakra-ui/react";
import heading from "./Images/heading.png";
import Navbar from "./Components/Navbar";
import MainPart from "./Components/MainPart";
import MainPart3 from "./Components/MainPart3";
import MainPart2 from './Components/MainPart2'
import MainPart4 from "./Components/MainPart4";
import MainPart5 from "./Components/MainPart5";

function App() {
  return (
    <div className="App">
      <Image src={heading} alt="heading" width={"100%"} />
      <Navbar />
      <MainPart />
      <br/>
      <MainPart2/>
      <MainPart3/>
      <MainPart4/>
      <MainPart5/>
    </div>
  );
}

export default App;
