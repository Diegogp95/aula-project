import React,  {useState} from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

function App(){

  return(
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Body">
        <MainBody />
      </div>
      <Footer />
    </>
  );
}

export default App;