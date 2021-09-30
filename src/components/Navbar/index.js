import React from 'react'
// import { Link } from "react-router-dom";

function Navbar(){
    return (
      //   <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor:"#483d8b" }}>
      //   <div className="navbar-brand">
      //     </div>
         
      
      //     {/* <Link to= "/" 
      //     role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      //       <span aria-hidden="true"></span>
      //       <span aria-hidden="true"></span>
      //       <span aria-hidden="true"></span>
      //     </Link>
      //   </div> */}
      
      //   <div id="navbarBasicExample" className="navbar-menu">
        
      //       <div className="navbar-item" style= {{color: "#fff", fontSize: "18px", margin: "20px" }}>
      //       Search
      //       </div>
      
      //       <div className="navbar-item" style= {{color: "#fff",fontSize: "18px", margin: "20px" }}>
      //        Explore
      //       </div>
      
      //      <div className="navbar-item">
      //      <ion-icon name="location-outline" style= {{fontSize:"30px", color: "#fff", margin: "20px", textAlign:"center" }}></ion-icon>
      //      </div>
      
      //     <div className="navbar-end">
      //       <div className="navbar-item">
      //       <div className="navbar-item" style= {{color: "#fff",fontSize: "18px", margin: "20px" }}>
      //        Join us
      //       </div>
      //       <div className="navbar-item" style= {{color: "#fff",fontSize: "18px", margin: "20px" }}>
      //        Log in
      //       </div>
                
      //         </div> 
      //       </div>
      //   </div>
      // </nav>
<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading" style= {{color: "#fff", fontSize: "16px"}}>Search</p>
     
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading"style= {{color: "#fff",fontSize: "16px"}}>Explore</p>
     
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <p class="heading" style= {{color: "#fff", fontSize:"30px", marginTop: "15px"}}>Ramblers</p>
      <p class="title"><ion-icon name="location-outline" style= {{fontSize:"40px", color: "#fff", margin: "20px" }}></ion-icon></p>
    
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading" style= {{color: "#fff",fontSize: "16px"}}>Sign-up</p>
      
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading"style= {{color: "#fff",fontSize: "16px"}}>Log-in</p>
      
    </div>
  </div>
</nav>



)
}

export default Navbar; 