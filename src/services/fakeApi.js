export const autenticate = (user) => {
  const userIndex = usersData.findIndex(
    (userData) => userData.username === user.username
  );


  if (userIndex < 0) {
    return null;
  }

  if (usersData[userIndex].password !== user.password) {
    return null;
  }

  return usersData[userIndex];
};
//A ideia foi criar um fakeApi por enquanto para mostrar o processo de prova de conceito de uma localstorage para
// o usuário vizualizar seu username após o login.

const usersData = [
  {
    name: 'Caio Favoretto',
    username: 'caio',
    password: '123456',
  },
  {
    name: 'Edmilson Francino',
    username: 'edola',
    password: 'edola123',
  },
  {
    name: 'Gustavo Lotto',
    username: 'lottera',
    password: '654321',
  },
  {
    name: 'Matheus Boareto',
    username: 'zecao',
    password: 'livetododia',
  },
  {
    name: 'Gabriel Lara',
    username: 'gabriel',
    password: '5eh10',
  },
  {
    name: 'Pedro Henrique',
    username: 'pedroh2s',
    password: 'pedro',
  },
];
