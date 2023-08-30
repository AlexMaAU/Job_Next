const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

const getUserFromLocalStorage = () => {
  return localStorage.getItem('user');
};

export { addUserToLocalStorage, getTokenFromLocalStorage, getUserFromLocalStorage };
