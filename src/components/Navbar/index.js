import React from 'react'

function Navbar(){
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* <Link to="/home" 
          className="navbar-item"
          > Ramblers
          </Link> */}
      
          {/* <Link to= "/" 
          role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link> */}
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <Link to = "/search" className="navbar-item">
            Search
            </Link>
       */}
            {/* <Link to= "/explore" className="navbar-item">
             Explore
            </Link> */}
      
           <div>
           <ion-icon name="location-outline"></ion-icon>
           </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* <Link to= "/"  className="btn btn-button is-primary">
                  <strong>Sign up</strong>
                </Link> */}
                {/* <Link to= "/" className="button is-light">
                  Log in
                </Link> */}
              </div>
            </div>



          </div>
        </div>
        </div>
      </nav>




)
}

export default Navbar; 