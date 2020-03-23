import React from "react";

import NavBar from "../components/NavBar.js";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import Header from "../images/badge-header.svg";
import "../pages/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Header} alt="Logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
                avatarUrl="https://pbs.twimg.com/profile_images/1184193988041105409/pr-9lmm7_400x400.jpg"
              ></Badge>
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
