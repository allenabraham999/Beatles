import React from 'react';
import "./Home.module.css";
import Landing from "./Landing.js";
import People from "./People.js";
import About from "./About.js";
function Home(){
    return(
        <div>
            <Landing/>
            <People/>
            <About/>
        </div>
    );
}
export default Home;