import React, { useState, useEffect } from 'react';
import './App.css';
import FormUser from './components/FormUser/index';
import FormListUser from './components/FormListUser';

function App() {
  const [listUser, setListUser] = useState([]);

  function TESTE() {
    setListUser([...listUser, localStorage.getItem('username')]);
    console.log(listUser);
  }

  return (
    <div className="App">
      <main className="form-principal">
        <ul>
          <FormUser onSubmit />
          <button onClick={TESTE}></button>
        </ul>
        {listUser.map((user) => (
          <FormListUser key={user} user={user} />
        ))}
      </main>
    </div>
  );
}

export default App;
