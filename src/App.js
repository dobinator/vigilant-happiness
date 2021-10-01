
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Intro from "./components/Intro"; 
import Landscape from "./components/Landscape"; 
import Story from "./components/Story";
import Footer from "./components/Footer";
import Glimpse from "./components/Glimpse"
import Details from "./components/Details"
// import 'bulma/css/bulma.min.css';


function App() {
  return (
    <div className="App">
      <div className="App">
     <Navbar/>
   
      <Landscape/>
      <Intro/>
      <Story/>
      <Details/>
      <Glimpse/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
