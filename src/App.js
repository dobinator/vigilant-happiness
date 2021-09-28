
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Landscape from "./components/Landscape"; 
import Footer from "./components/Footer";
// import 'bulma/css/bulma.min.css';


function App() {
  return (
    <div className="App">
      <div className="App">
     <Navbar/>
      <Landscape/>
      {/* <Switch>
        <Route exact path="/" component=""/>
        <Route exact path="/" component=""/>
      </Switch> */}
      <Footer/>
    </div>
    </div>
  );
}

export default App;
