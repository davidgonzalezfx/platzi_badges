import React from "react";
import logoConf from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoConf} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://pbs.twimg.com/profile_images/1184193988041105409/pr-9lmm7_400x400.jpg"
            alt="Avatar"
          />
          <h1>
            David
            <br />
            Gonzalez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Fullstack Software Engineer</h3>
          <div>@davidgonzalezfx</div>
        </div>

        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
