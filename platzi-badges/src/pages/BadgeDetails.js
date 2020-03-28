import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import Logo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';

export default class BadgeDetails extends Component {
  render() {
    return (
      <div>
        <div className='BadgeDetails__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <img src={Logo} alt='Logo Platzi Conf' />
              </div>
              <div className='col-6 BadgeDetails__hero-attentandt-name'>
                <h1>
                  {this.props.badge.firstName} {this.props.badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName={this.props.badge.firstName}
                lastName={this.props.badge.lastName}
                email={this.props.badge.email}
                jobTitle={this.props.badge.jobTitle}
                twitter={this.props.badge.twitter}
              />
            </div>
            <div className='col'>
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className='btn btn-primary mb-4'
                    to={`/badges/${this.props.badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
