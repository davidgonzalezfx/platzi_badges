import React from "react";

import "./styles/Navbar.css";
import Logo from "../images/logo.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo"></img>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
