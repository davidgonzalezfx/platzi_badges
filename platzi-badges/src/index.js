import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew.js";
import Badges from "./pages/Badges.js";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
