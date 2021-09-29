import React from 'react'


function Glimpse() {
    return (
        <section className="section is-medium">
        <h1 className="title">Member's stories</h1>
        <div className= "columns">
        <div className ="column">
        <figure>
            <img src= "/images/gal.jpg" alt="gal" style= {{height: "200px", width: "200px", borderRadius: "50%" }}/>
        </figure>
        <h4 style={{fontSize:"18px",
                textTransform: "uppercase",
                fontWeight:"500"}}>
                Kristen Johnson</h4>
        <p style= {{lineHeight: "1.8"}}>"Et malesuada fames ac turpis egestas maecenas. Posuere urna nec tincidunt praesent semper feugiat. Cras pulvinar mattis nunc sed blandit libero volutpat. Quis hendrerit dolor magna eget. Morbi tristique senectus et netus et malesuada."</p>
        </div>
        <div className="column">
        <figure>
            <img src= "/images/guy.jpg" alt="guy" style= {{height: "200px", width: "200px", borderRadius: "50%" }}/>
        </figure>
        <h4 style={{fontSize:"18px",
                textTransform: "uppercase", 
                fontWeight:"500"}}>Jason Song</h4>
        <p style= {{lineHeight: "1.8"}}>"Sit amet venenatis urna cursus. Ultricies mi quis hendrerit dolor magna eget est. Dictum at tempor commodo ullamcorper a. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Convallis convallis tellus id interdum velit laoreet id donec."</p>
        </div>
        <div className="column">
        <figure>
            <img src= "/images/guy2.jpg" alt="guy" style= {{height: "200px", width: "200px", borderRadius: "50%" }}/>
        </figure>
        <h4 style={{fontSize:"18px",
                textTransform: "uppercase", 
                fontWeight:"500"}}>Davin Smith</h4>
        <p style= {{lineHeight: "1.8"}}>"Sit amet venenatis urna cursus. Ultricies mi quis hendrerit dolor magna eget est. Dictum at tempor commodo ullamcorper a. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Convallis convallis tellus id interdum velit laoreet id donec."</p>
        </div>

        </div>
        </section>
    )
}

export default Glimpse;