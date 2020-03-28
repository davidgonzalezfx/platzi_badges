import React, { Component } from 'react';
import Modal from './Modal.js';

export default class DeleteBadgeModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <div className='DeleteBadgeModal'>
          <h1>Are you sure?</h1>
          <p>You are about to delete this badge</p>
          <div>
            <button
              onClick={this.props.onDeleteBadge}
              className='btn btn-danger mr-4'
            >
              Delete
            </button>
            <button onClick={this.props.onClose} className='btn btn-primary'>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
