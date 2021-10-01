import React from 'react'


function Landscape() {
    return (
        <section className="section is-medium">
          <div
          style={{ width: "100%",
          padding: 0, margin: "0%",
           position:"relative" }}
          >
         
         <figure className="background image"   
         style= 
         {{backgroundPosition: "center",
         backgroundRepeat: "noRepeat", 
         display: "flex",
         backgroundSize: "cover",
         backgroundImage:
         "linear-gradient(rgba(0,0,1,10),rgba(0,0,0,1))", 
      
         }}>
        <img src= "./images/tent.jpg" alt="Landscape photo"/>
         </figure>
       
         <div>
           <h1 className="title landscape-title" 
           style={{color: "#fff", 
           textAlign:"center", 
           position:"absolute", 
           top:"30%", 
           left: "30%", 
           fontSize: "25px", 
           fontWeight:"400"}}> <i className="fas fa-quote-left" 
           style={{padding: "15px"}}>
             </i>Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.
             <i className="fas fa-quote-right" style={{padding: "15px"}}></i></h1>
           <p style={{color: "#fff",
              fontSize: "18px",
               top: "40%", 
               right: "15%",
               position: "absolute", 
               lineHeight: "3.0",
               padding: "7px",
                marginRight: "10px"}}> ~ Henry David Thoreau</p>
         </div>
         </div>
       </section>
   )
    
}

export default Landscape;
