import React from 'react'
// import { Link } from "react-router-dom";

function Navbar(){
    return (  
  <nav className="navbar" style={{backgroundColor: "#483d8b"}} role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <p className="navbar-item" 
      style=
        {{color: "#fff",
         fontSize: "60px"}}>Ramblers</p>
   
    <p role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </p>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div className="navbar-start">
      <p className="navbar-item"
      style=
        {{color: "#fff", 
          fontSize: "18px", 
          fontWeight: "600"}}>
       Search
      </p>

      <p className="navbar-item" 
        style=
        {{color: "#fff", 
          fontSize: "18px", 
          fontWeight: "600"}}>
      Explore
      </p>

      <div className="navbar-item has-dropdown is-hoverable" >
        <p className="navbar-link" 
        style=
            {{backgroundColor: "#483d8b", 
              color: "#fff", 
              fontSize:"18px", 
              fontWeight: "600"}}>
          Follow Us
        </p>

        <div class="navbar-dropdown">
          <p class="navbar-item"
          style=
            {{backgroundColor: "#483d8b",
             color: "#fff", 
            fontSize:"22px"}}>
          <ion-icon name="logo-instagram"></ion-icon>
          </p>
          <p className="navbar-item"
            style=
            {{backgroundColor: "#483d8b", 
            color: "#fff", 
            fontSize:"22px"}}>
          <ion-icon name="logo-facebook"></ion-icon>
          </p>
          <p className="navbar-item"
          style=
            {{backgroundColor: "#483d8b", 
            color: "#fff", 
            fontSize:"22px"}}>
          <ion-icon name="logo-linkedin"></ion-icon>
          </p>
         
          <p class="navbar-item"
          style=
            {{backgroundColor: "#483d8b",
            color: "#fff",
            fontSize:"18px"}}>
          <ion-icon name="logo-twitter"></ion-icon>
          </p>
     
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <p className="button" 
          style=
          {{backgroundColor: "#fff3bf",
          color: "#141414"}}>
            <strong>Sign up</strong>
          </p>
          <p className="button" 
          style=
            {{backgroundColor: "#e3fafc",
            color: "#141414"}}>
            Log in
          </p>
        </div>
      </div>
    </div>


  </div>
  </div>
</nav>
      
)
}
 
export default Navbar; 