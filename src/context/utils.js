const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token;
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user;
};

export {
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
};
