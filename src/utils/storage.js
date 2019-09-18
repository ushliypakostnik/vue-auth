import axios from 'axios';
import Cookies from 'js-cookie';

import { COOKIES, LOCALSTORAGE, CLIENT_HOST } from '@/utils/constants';

// Client type
// eslint-disable-next-line dot-notation
axios.defaults.headers.common['Client'] = `${CLIENT_HOST}`;

// Auto auth
export const AutoAuth = Cookies.get(COOKIES.TOKEN.name);
if (AutoAuth) {
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = `Token ${AutoAuth}`;
}

export default ({

  // Auth

  setAuth: (token) => {
    Cookies.set(COOKIES.TOKEN.name, token, { expires: COOKIES.TOKEN.expires });
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  },

  deleteAuth: () => {
    Cookies.remove(COOKIES.TOKEN.name);
    // eslint-disable-next-line dot-notation
    delete axios.defaults.headers.common['Authorization'];
    delete axios.defaults.headers.common['Language'];
  },

  // User

  setUserProfile: (responce) => {
    const { user } = responce.data;
    localStorage.setItem(LOCALSTORAGE.profile, JSON.stringify(user));
  },

  deleteUserProfile: () => {
    localStorage.removeItem(LOCALSTORAGE.profile);
  },

  // Utils

  rememberLanguage: (language) => {
    Cookies.set(COOKIES.LANG.name, language, { expires: COOKIES.LANG.expires });
    axios.defaults.headers.common['Language'] = `${Language}`;
  },
});
