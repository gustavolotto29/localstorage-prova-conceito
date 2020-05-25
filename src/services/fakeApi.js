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

const usersData = [
  {
    name: 'Caio Favoretto',
    username: 'caio',
    password: '123456',
  },
  {
    name: 'Edmilson Francino',
    username: 'edola',
    password: 'brabo123',
  },
  {
    name: 'Gustavo Lotto',
    username: 'lottera',
    password: '654321',
  },
  {
    name: 'Pedro Santos',
    username: 'pedroh2s',
    password: 'pedro2sh',
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
];
