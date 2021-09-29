import React from 'react'

function Story() {
    return (
        <section className="section is-medium " style={{backgroundColor: "#f5f5f5"}}>
        <h1 className="title">Medium section</h1>
        <div className ="columns">
            <div className = "column">
            <ion-icon name="leaf-outline" style= {{fontSize: "60px", color:"#253529"}}></ion-icon>
            <h3 style={{fontSize: "20px"}}>Scenic Vistas</h3>
            <h3 style={{fontSize: "20px"}}>Variety of landscapes</h3>
            <h3 style={{fontSize: "20px"}}>kjlojlikhujh</h3>
            </div>

            <div className = "column">  
            <ion-icon name="walk-outline" style= {{fontSize: "60px",color:"#253529" }}></ion-icon>
            <h3 style={{fontSize: "20px"}}>Family treks</h3>
            <h3 style={{fontSize: "20px"}}>Well marked trails</h3>
            <h3 style={{fontSize: "20px"}}>Accomodations</h3>
            </div>

            <div className = "column">  
            <ion-icon name="compass-outline" style= {{fontSize: "60px", color:"#253529"}}></ion-icon>
            <h3 style={{fontSize: "20px"}} >From 1 mile jaunts</h3>
            <h3 style={{fontSize: "20px"}}>Overnight hikes</h3>
            <h3 style={{fontSize: "20px"}}>Long Distance</h3>
            </div>

        </div>
        </section>
    )
}

export default Story; 