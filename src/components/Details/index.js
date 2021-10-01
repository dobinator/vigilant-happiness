import React from 'react';




function Details() {
    return (
    <section className="section is-medium"
        style={{backgroundColor:"#e3fafc"}}>
        <div className="columns">
            <div className="column">
    <p style=
            {{fontSize: "150px",
             fontWeight: "600", 
             top: "30%", 
             right: "20px",
             color:"#ffa500",
             margin: "0"
            }}
              >03</p>
    <h1 style=
            {{color:"#000039",
            fontSize:"45px",
            fontWeight:"500" }}
            >The Great Outdoors</h1>
    <h1 className= "details_subtitle" 
    style=
        {{fontSize:"18px",
        color: "#d2691e"}}
        >It's calling your name</h1>
    </div>
    <div className= "column">
        <figure>
            <img src= "./images/hiking3.jpg" 
            alt="young lady with backpack on in the woods"
            style= 
            {{ 
            border: "4px dotted #fcc419",
            borderRadius:"3%",
            textAlign:"center", 
            height:"50%",
            width:"50%"
          }}/>
        </figure>
    <p style=
            {{color:"#000039", 
            fontSize:"18px", margin:"10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
    </section>
    )
    }
export default Details
