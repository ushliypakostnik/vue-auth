import axios from 'axios';
import Cookies from 'js-cookie';

import {
  COOKIES,
  LOCALSTORAGE,
  AUTO_LANG,
} from '@/utils/constants';

/* eslint-disable dot-notation */

// Auto auth
export const AutoAuth = Cookies.get(COOKIES.TOKEN.name);
if (AutoAuth) {
  axios.defaults.headers.common['Authorization'] = `Token ${AutoAuth}`;
}

axios.defaults.withCredentials = true;

// Auto language
Cookies.set(COOKIES.LANG.name, AUTO_LANG, { expires: COOKIES.LANG.expires });

export default ({

  // Auth

  setAuth: (token) => {
    Cookies.set(COOKIES.TOKEN.name, token, { expires: COOKIES.TOKEN.expires });
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  },

  deleteAuth: () => {
    Cookies.remove(COOKIES.TOKEN.name);
    delete axios.defaults.headers.common['Authorization'];
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
  },

  rememberTheme: (theme) => {
    Cookies.set(COOKIES.THEME.name, theme, { expires: COOKIES.THEME.expires });
  },
});

/* eslint-enable dot-notation */
