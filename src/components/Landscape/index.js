import React from 'react'


function Landscape() {
    return (
        <section className="section is-medium">
        <h1 className="title" style={{color: "#fff"}}>Ramblers</h1>
         <figure className="background image"   
         style= {{backgroundPosition: "center",
         backgroundRepeat: "noRepeat", display: "flex",
         backgroundSize: "cover",backgroundImage:
         "linear-gradient(rgba(0,0,1,10),rgba(0,0,0,1))", opacity: "30%"
         }}>
        <img src= "./images/hiking1.jpg" alt="Landscape photo"
          />
         </figure>
          
           
       </section>
   )
    
}

export default Landscape;
