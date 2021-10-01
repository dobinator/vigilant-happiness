import React from 'react'


function Intro() {
    return (
        <section className="section is-medium" 
            style={{backgroundColor: "#f0f8ff"}}>
          <div className = "columns">
            <div className="column">
              <figure>
                <img src ="../images/backpack.jpg" 
                alt="lady walking away with backpack"
                className= "dropShadow"
                style= 
                 {{ height: "50%",
                  width: "50%",}}/>
              </figure>
            <figure>
                <img src ="../images/hikingBoots.jpg" 
                alt="close of hiking boots"
                className= "dropShadow"
                style= 
                  {{height: "50%",
                  width: "50%",
                  textAlign: "left"}}/>
              </figure>
              <figure>
                <img src ="../images/hiking5.jpg"
                alt="man sitting on limb over creek"
                className= "dropShadow"
                style= 
                {{ height: "50%",
                width: "50%", 
                }}/>
              </figure>
              </div>
        <div className="column">
          <h1 style=
              {{fontSize: "150px", 
              fontWeight: "600", 
              color:"#483d8b", 
              margin: "0"}}
              >01</h1>
        <h1 style= 
              {{color: "#483d8b",
               fontSize: "60px", 
               fontWeight:"500",
               margin: "0"}}
               >Ramblers</h1>
        <p 
        style= {{ lineHeight: "1.5", fontWeight: "500"}}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br></br>
        <p 
        style= {{ lineHeight: "1.5",fontWeight: "500"}}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </div>
      </section>
    )
}

export default Intro; 
