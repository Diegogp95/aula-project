import React,  {useState} from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

function App(){

  return(
    <>
        <Navbar />
        <MainBody />
      <Footer />
    </>
  );
}

export default App;