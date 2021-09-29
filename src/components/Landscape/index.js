import React from 'react'


function Landscape() {
    return (
        <section className="section is-medium">
         <figure className="background image"   
         style= 
         {{backgroundPosition: "center",
         backgroundRepeat: "noRepeat", 
         display: "flex",
         backgroundSize: "cover",
         backgroundImage:
         "linear-gradient(rgba(0,0,1,10),rgba(0,0,0,1))", 
      
         }}>
        <img src= "./images/tent.jpg" alt="Landscape photo"
          />
         </figure>
       </section>
   )
    
}

export default Landscape;
