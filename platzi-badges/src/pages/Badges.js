import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import Logo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList.js';
import PageLoading from '../components/PageLoading.js';
import PageError from '../components/PageError.js';
import MiniLoader from '../components/MiniLoader';
import api from '../api.js';

export default class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.indervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className='Badges'>
          <div className='Badges__hero'>
            <div className='Badges__container'>
              <img className='Badges__conf-logo' src={Logo} alt='Logo' />
            </div>
          </div>
        </div>

        <div className='Badges__container'>
          <div className='Badges__buttons'>
            <Link className='btn btn-primary' to='/badges/new'>
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}
