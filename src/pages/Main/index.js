import React, { useState, useEffect } from 'react';

import { autenticate } from '../../services/fakeApi';

import { Container } from './styles';

function Main({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      alert('Preencha todos os campos');
    }

    const user = autenticate({ username, password });

    if (!user) {
      setUsername('');
      setPassword('');

      alert('Usuario e senha errados');

      return;
    }

    localStorage.setItem('user', JSON.stringify(user));

    history.push('/dashboard');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nome do usuário</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Main;
