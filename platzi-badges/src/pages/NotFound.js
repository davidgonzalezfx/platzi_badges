import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import platziconfLogoImage from "../images/platziconf-logo.svg";
import NotFoundImage from "../images/NotFoundImage.png";

export default class NotFound extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>404 Page Not Found</h1>
              <Link className="btn btn-primary" to="/">
                Back To Home
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={NotFoundImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
