import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import PopUpPane from "./components/popup/PopUpPane";
import { usePopUp } from "./components/popup/usePopUp";
import Seals from "./components/Seals";
import BannerContainer from "./components/BannerContainer";

function App(){
  const {isVisible, handleClick} = usePopUp();
  return(
    <>
      <Navbar />
      <PopUpPane isVisible={isVisible} handleClick={handleClick} />
      <MainBody handleClick={handleClick} />
      <BannerContainer />
      <Seals />
      <Footer />
    </>
  );
}

export default App;