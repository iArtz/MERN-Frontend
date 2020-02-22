/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const { children, show, onClick } = props;
  const content = (
    <CSSTransition in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <aside className="side-drawer" onClick={onClick}>{children}</aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
