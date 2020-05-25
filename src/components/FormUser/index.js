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
      <div className="div-name">
        <label htmlFor="">Nome do usuário</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="div-password">
        <label htmlFor="">Senha</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="div-send">
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}

export default FormUser;
