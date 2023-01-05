import React,  {useState} from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from "./components/MainBody";

function App(){

  return(
    <>
      <Navbar />
      <MainBody />
    </>
  );
}

export default App;