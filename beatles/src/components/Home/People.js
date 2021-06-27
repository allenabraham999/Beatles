import React from "react";
import cardContent from "./content";
import Card from "./Card.js";
import "./People.css";
import Button from "@material-ui/core/Button";

function setCards(c) {
  return <Card photo={c.photo} name={c.name} about={c.about} />;
}

function People() {
  return (
    <div className="Cont">
      <div className="title-heading">
        <h1 className="center-align title-name">Members</h1>
      </div>
      {/* <div className="container"> */}
        <div className="row center-align">
          <div className = "col s12 m6 l5 offset-l1 m1">
            {setCards(cardContent[0])}
            {console.log(cardContent[0])}
          </div>
          <div className = "col s12 m6 l5 ">
            {setCards(cardContent[1])}
          </div>
        </div>
        <div className="row">
          <div className = "col s12 m6 l5 offset-l1 m1">
            {setCards(cardContent[2])}
          </div>
          <div className = "col s12 m6 l5 lastone">
            {setCards(cardContent[3])}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default People;
