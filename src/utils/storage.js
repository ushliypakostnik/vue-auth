import axios from 'axios';

import { LOCAL } from './constants';

// Auto auth
const t = localStorage.getItem(LOCAL.token);
if (t) {
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = `Token ${t}`;
}

export default ({

  // Auth

  setAuth: (token) => {
    localStorage.setItem(LOCAL.token, token);
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  },

  deleteAuth: () => {
    localStorage.removeItem(LOCAL.token);
    // eslint-disable-next-line dot-notation
    delete axios.defaults.headers.common['Authorization'];
  },

  // User

  setUserProfile: (responce) => {
    const { user } = responce.data;
    localStorage.setItem(LOCAL.profile, user);
  },

  deleteUserProfile: () => {
    localStorage.removeItem(LOCAL.profile);
  },
});
