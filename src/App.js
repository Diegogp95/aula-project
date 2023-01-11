import React,  {useState} from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import PopUpPane from "./components/popup/PopUpPane";

function App(){

  return(
    <>
        <Navbar />
        <PopUpPane />
        <MainBody />
      <Footer />
    </>
  );
}

export default App;