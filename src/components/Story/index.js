import React from 'react'

function Story() {
    return (
        <section className="section is-medium " style={{backgroundColor:"#add8e6" }}>
             <p style={
                 {fontSize: "150px", 
                 fontWeight: "600", 
                 top: "30%",
                 right: "20px", 
                 color:"#483d8b", 
                 margin: "0"
                 }}>02</p>
        <h1 style= 
        {{color:"#000036", 
        fontSize: "38px", 
       }} >Perks of Membership </h1>
        <div className ="columns">
            <div className = "column">
            <ion-icon name="leaf-outline"
             style= {{fontSize: "60px",
              color:"#483d8b",
              lineHeight: "2.5",
               margin: "20px"}}></ion-icon>
            <h3 style={{fontSize: "22px"}}>Scenic Vistas</h3>
            <h3 style={{fontSize: "22px"}}>Variety of landscapes</h3>
            <h3 style={{fontSize: "22px"}}>Well marked trails</h3>
            </div>

            <div className = "column">  
            <ion-icon name="walk-outline" 
            style= {{fontSize: "60px",
            color:"#483d8b",
            lineHeight: "2.5",
            margin: "20px"}}></ion-icon>
            <h3 style={{fontSize: "22px"}}>Family treks</h3>
            <h3 style={{fontSize: "22px"}}>Engaging Community</h3>
            <h3 style={{fontSize: "22px"}}>Accomodations</h3>
            </div>

            <div className = "column">  
            <ion-icon name="compass-outline"
             style= {{fontSize: "60px", 
             color:"#483d8b",
             lineHeight: "2.5",
             margin: "20px"}}></ion-icon>
            <h3 style={{fontSize: "22px"}} >From 1 mile jaunts</h3>
            <h3 style={{fontSize: "22px"}}>Overnight hikes</h3>
            <h3 style={{fontSize: "22px"}}>Long Distance</h3>
            </div>

        </div>
        </section>
    )
}

export default Story; 