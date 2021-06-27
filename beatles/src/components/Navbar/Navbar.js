// href="#!"

import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";

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
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <MenuIcon />
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
                  props.p("music");
                }}
              >
                Music
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
          </ul>
        </div>
      </nav>
      <ul className="sidenav side-push" id="mobile-demo">
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
              props.p("music");
            }}
          >
            Music
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
        {/* <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
