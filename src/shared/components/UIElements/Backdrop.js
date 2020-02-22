/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = ({ onClick }) => ReactDOM.createPortal(
  <div className="backdrop" onClick={onClick} />,
  document.getElementById('backdrop-hook'),
);

export default Backdrop;
