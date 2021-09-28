import React from 'react'
// import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: "#979aaa"}}>
        <div className="navbar-brand" style= {{ fontSize: "30px", color: "#fff"}}>
          Ramblers
          </div>
         
      
          {/* <Link to= "/" 
          role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div> */}
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item" style= {{color: "#fff"}}>
            Search
            </div>
      
            <div className="navbar-item" style= {{color: "#fff"}}>
             Explore
            </div>
      
           <div>
           <ion-icon name="location-outline" style= {{fontSize:"25px", color: "#fff"}}></ion-icon>
           </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                
              </div> 
            </div>



          </div>
        </div>
        </div>
      </nav>




)
}

export default Navbar; 