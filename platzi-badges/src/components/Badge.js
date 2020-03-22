import React from "react";
import logoConf from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={logoConf} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            David
            <br />
            Gonzalez
          </h1>
        </div>

        <div>
          <p>Fullstack Software Engineer</p>
          <p>@davidgonzalezfx</p>
        </div>

        <div>#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
