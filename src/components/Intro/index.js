import React from 'react'


function Intro() {
    return (
        <section className="section is-medium" style={{backgroundColor: "#e3dac9"}}>
          <div className = "columns">
          <div className="column">
            <figure>
              <img src ="../images/hikingBoots.jpg" alt="close of hiking boots"
              style= {{ height: "50%", width: "50%",}}/>
            </figure>
        </div>

        <div className="column">
        <h1 style= {{color: "#253529", fontSize: "60px", fontWeight:"500"}}>Ramblers</h1>
          </div>
        </div> 
      </section>
    )
}

export default Intro; 
