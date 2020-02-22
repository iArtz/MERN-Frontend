import React from 'react';

import './UserItem.css';

const UserItem = (props) => {
  const { name } = props;

  return <div>{name}</div>;
};

export default UserItem;
