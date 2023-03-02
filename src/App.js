import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import PopUpPane from "./components/popup/PopUpPane";
import { usePopUp } from "./components/popup/usePopUp";
import Seals from "./components/Seals";
import MobileDropDown from "./components/MobileDropDown";
import useViewport from "./components/useViewport";
import useHamburger from "./components/useHamburger";

function App(){
  const {isVisible, handleClick} = usePopUp();
  const MIN_WIDTH = 1000;
  const { isWide } = useViewport(MIN_WIDTH);
  const {isDisplayed, toggleDisplay } = useHamburger();

  return(
    <>
      <Navbar isWide={isWide} toggleDisplay={toggleDisplay} />
      <MobileDropDown isWide={isWide} isDisplayed={isDisplayed} />
      <PopUpPane isVisible={isVisible} handleClick={handleClick} />
      <MainBody handleClick={handleClick} />
      <Seals />
      <Footer />
    </>
  );
}

export default App;