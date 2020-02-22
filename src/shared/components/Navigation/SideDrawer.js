import React from 'react';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const { children } = props;
  return <aside className="side-drawer">{children}</aside>;
};

export default SideDrawer;
