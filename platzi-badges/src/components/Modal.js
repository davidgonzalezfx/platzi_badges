import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './styles/Modal.css';

export default class Modal extends Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return ReactDom.createPortal(
      <div className='Modal'>
        <div className='Modal__container'>
          <button onClick={this.props.onClose} className='Modal__close-button'>
            X
          </button>
          {this.props.children}
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}
