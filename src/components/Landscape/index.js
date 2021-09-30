import React from 'react'


function Landscape() {
    return (
        <section className="hero">
          <div className="hero-body"
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
        <img src= "./images/tent.jpg" alt="Landscape photo"
          />
         </figure>
       
         <div>
           <h1 className="title" style={{color: "#fff", textAlign:"center", position:"absolute", top:"40%", right: "20%", fontSize: "28px", fontWeight:"500"}}> Do you enjoy getting away? </h1>
           <p style={{color: "#fff", fontSize: "18px", textAlign: "center", top: "55%", left: "45%", position: "absolute", lineHeight: "2.0", marginRight: "10px"}}>We all need to take a break from the screens and get back to the simple things. Relax while hiking in the wilderness. See the sunrise over the mountains. The seasons change. The smell of woodsmoke combining with a meal after a day of being outside. </p>
         </div>
         </div>
       </section>
   )
    
}

export default Landscape;
