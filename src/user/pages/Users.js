import React from 'react';

import UsersList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Art',
      images: 'https://avatars0.githubusercontent.com/u/54107137?s=460&v=4',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};


export default Users;
