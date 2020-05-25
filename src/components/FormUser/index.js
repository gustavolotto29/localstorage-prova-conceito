import React, { useState, useEffect } from 'react';
import './style.css';

function FormUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    localStorage.setItem('username', username);

    console.log(localStorage.getItem('username'));
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="div-name"></div>
      <div className="div-password"></div>
      <div className="div-send"></div>
    </form>
  );
}

export default FormUser;
