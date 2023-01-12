import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import PopUpPane from "./components/popup/PopUpPane";
import { usePopUp } from "./components/popup/usePopUp";

function App(){
  const {isVisible, handleClick} = usePopUp();
  console.log("hi");
  return(
    <>
      <Navbar />
      <PopUpPane isVisible={isVisible} handleClick={handleClick} />
      <MainBody handleClick={handleClick} />
      <Footer />
    </>
  );
}

export default App;