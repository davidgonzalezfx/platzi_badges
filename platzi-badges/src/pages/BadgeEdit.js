import React from 'react';

import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import Header from '../images/platziconf-logo.svg';
import '../pages/styles/BadgeEdit.css';

import api from '../api.js';
import PageLoading from '../components/PageLoading.js';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: ''
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className='BadgeEdit__hero'>
          <img
            className='img-fluid BadgeEdit__hero-image'
            src={Header}
            alt='Logo'
          ></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'Email'}
                twitter={this.state.form.twitter || 'Twitter'}
                avatarUrl='https://pbs.twimg.com/profile_images/1184193988041105409/pr-9lmm7_400x400.jpg'
              ></Badge>
            </div>

            <div className='col-6'>
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
