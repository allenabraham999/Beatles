import React from "react";
import "./card.css"

function Card(props) {
  // let photoName = Object.keys(props.photos)[0];
  console.log(props.photo.john);
  return (
    <div className="contained center-align ">
      {console.log("Here comes a photo of John")}
      {console.log(props)}
      <img className="members-image" src = {props.photo[Object.keys(props.photo)]} alt = "John Lenon"/>
      <h3 className="member-name">{props.name}</h3>
      <h3 className = "member-about left-align">{props.about}</h3>
    </div>
  );
}

export default Card;
