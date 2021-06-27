import React from "react";
import "./Footer.css";
import walk from "./standing.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="foot">
      <div className="container">
        <div className="row">
          <div className="beets col s12 m4 l4">
            <div class="card ">
              <div class="card-content white-text">
                <span class="card-title">Built With ♥ By Allen Alex</span>
                <hr />
                <div className="linkers">
                  <a href="https://twitter.com/alienallenover">
                    <TwitterIcon />
                  </a>
                  <a href="https://github.com/allenabraham999">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="beets col s12 m4 l4">
            <div class="card ">
              <img className="walk-image" src={walk} alt="They Walking" />
            </div>
          </div>
          <div className="beets col s12 m4 l4">
            <div class="card ">
              <div class="card-content white-text">
                <span class="card-title">Contact@</span>
                <hr/>
                <p class="foot-text">allenabraham999@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
