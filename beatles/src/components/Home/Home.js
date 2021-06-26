import React from 'react';
import "./Home.css";
import Landing from "./Landing.js";
import People from "./People.js";
import About from "./About.js";
import Footer from "../Footer/Footer";
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