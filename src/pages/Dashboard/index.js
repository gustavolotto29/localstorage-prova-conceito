import React, { useState, useEffect } from 'react';

function Dashboard({ history }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    const userAuthenticated = JSON.parse(localStorage.getItem('user'));

    if (!userAuthenticated) {
      history.push('/');
      return;
    }

    setUser(userAuthenticated.name);
  }, []); // eslint-disable-line

  return <h1>Seja bem vindo, {user}</h1>;
}

export default Dashboard;
