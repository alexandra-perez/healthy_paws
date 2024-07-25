import React from 'react';
import './Modal.scss'; // Ensure you have a CSS file for styling the modal

function Modal({ onClose, children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
