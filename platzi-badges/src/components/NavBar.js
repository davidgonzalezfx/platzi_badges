import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import Logo from "../images/logo.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo"></img>
            <span className="font-weight-light">Conference</span>
            <span className="font-weight-bold">Badges</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
