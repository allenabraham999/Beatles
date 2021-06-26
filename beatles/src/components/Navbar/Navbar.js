// href="#!"

import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
function NavBar(props) {
  return (
    <div>
      <nav className="#212121 grey darken-4">
        <div class="nav-wrapper">
          <a
            href="#!"
            className="brand-logo"
            onClick={() => {
              props.p("home");
            }}
          >
            <img className="logoImage" src={logo} alt="Beatles Logo" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("album");
                }}
              >
                Album
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("news");
                }}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("store");
                }}
              >
                Store
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
