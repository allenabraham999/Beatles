import React from "react";
import "./Music.css";

function MusicCard(props){
    return(<div className="moosic center-align">
        {console.log("Moosic")}
        {console.log(props)}
        <img className = "album-art" src = {props.photo} alt="BandMemberPhoto"></img>
        <h1 className="a-heading">{props.name}</h1>
        <p className="left-align">{props.about}</p>
    </div>);
}

export default MusicCard;






