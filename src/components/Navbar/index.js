import React from 'react'
// import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: "#3b7a57"}}>
        <div className="navbar-brand">
          </div>
         
      
          {/* <Link to= "/" 
          role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div> */}
      
        <div id="navbarBasicExample" className="navbar-menu">
        
            <div className="navbar-item" style= {{color: "#fff", fontSize: "18px", margin: "20px" }}>
            Search
            </div>
      
            <div className="navbar-item" style= {{color: "#fff",fontSize: "18px", margin: "20px" }}>
             Explore
            </div>
      
           <div className="navbar-item">
           <ion-icon name="location-outline" style= {{fontSize:"25px", color: "#fff", margin: "20px" }}></ion-icon>
           </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
             
                
              </div> 
            </div>
        </div>
      </nav>




)
}

export default Navbar; 