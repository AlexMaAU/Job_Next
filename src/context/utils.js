const addUserToLocalStorage = ({ user, token }) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }
};

const getTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return token;
  }
};

const getUserFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user;
  }
};

export {
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
};
