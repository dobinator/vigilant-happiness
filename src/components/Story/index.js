import React from 'react'

function Story() {
    return (
        <section className="container-flex story_background">
              <div className ="columns" style={{}}>
                   <div className= "row">
                   <div className="column">
        <h1 style=
                {{fontSize: "150px", 
                 fontWeight: "600", 
                 top: "30%",
                 right: "20px", 
                 color:"#fff", 
                 margin: "0"
                 }}>02</h1>


        <h1 style= 
        {{color:"#ace5ee", 
        fontSize:"45px",
        fontWeight:"500" 
       }} >The Perks</h1>
      
       </div>
       </div>
            <div className = "column">
            <ion-icon name="leaf-outline"
             style= {{fontSize: "60px",
              color:"#ffa500",
              lineHeight: "2.5",
               margin: "20px"}}></ion-icon>
            <h3 style=
                {{fontSize: "22px",
            color:"#fff"}}>Scenic Vistas</h3>
            <h3 style=
                {{fontSize: "22px",
                color:"#fff"}}>Variety of landscapes</h3>
            <h3 style=
                {{fontSize: "22px", 
                color:"#fff"}}>Well marked trails</h3>
            </div>

            <div className = "column">  
            <ion-icon name="walk-outline" 
            style= {{fontSize: "60px",
            color:"#ffa500",
            lineHeight: "2.5",
            margin: "20px"}}></ion-icon>
            <h3 style=
                {{fontSize: "22px",
                color:"#fff"}}>Family & Dog Friendly</h3>
            <h3 style=
                {{fontSize: "22px",
                color:"#fff"}}>Engaging Community</h3>
            <h3 style=
                {{fontSize: "22px",
                 color:"#fff"}}>Accomodations</h3>
            </div>

            <div className = "column">  
            <ion-icon name="compass-outline"
             style= {{fontSize: "60px", 
             color:"#ffa500",
             lineHeight: "2.5",
             margin: "20px"}}></ion-icon>
            <h3 style=
                {{fontSize: "22px",
                color:"#fff"}} >Detailed information</h3>
            <h3 style=
                {{fontSize: "22px",
                color:"#fff"}}>Variety of hikes</h3>
            <h3 style=  
                {{fontSize: "22px",
                color:"#fff"}}>From short treks to Over nighters</h3>
                
            </div>
            </div>
        </section>
    )
}

export default Story; 