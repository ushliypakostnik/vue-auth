import {
  REMIND_PASSWORD,
  REMIND_PASSWORD_SUCCESS,
  REMIND_PASSWORD_ERROR,
  SET_PASSWORD,
  SET_PASSWORD_ERROR,
} from '@/store/actions/pass';
/* eslint-disable no-unused-vars */
import { AUTH_SUCCESS } from '@/store/actions/auth';
/* eslint-enable no-unused-vars */

import router from '@/router';

import api from '@/utils/api';
import storage from '@/utils/storage';

const state = {
  error: '',
  success: '',
  error2: '',
};

/* eslint-disable no-shadow */
const getters = {
  error: state => state.error,
  success: state => state.success,
  error2: state => state.error2,
};
/* eslint-enable no-shadow */

const actions = {
  [REMIND_PASSWORD]: ({ commit }, email) => {
    return new Promise((resolve, reject) => {
      api.postRemindPassword(email)
        .then((response) => {
          commit(REMIND_PASSWORD_SUCCESS, response);
          resolve(response);
        })
        .catch((err) => {
          commit(REMIND_PASSWORD_ERROR, err);
          reject(err);
        });
    });
  },
  [SET_PASSWORD]: ({ commit }, user) => {
    const { token } = user;
    return new Promise((resolve, reject) => {
      api.postNewPassword({ id: user.id, password: user.password })
        .then((response) => {
          storage.setAuth(token);
          commit('auth/AUTH_SUCCESS', token, { root: true });
          router.replace({ name: 'Home' });
          resolve(response);
        })
        .catch((err) => {
          commit(SET_PASSWORD_ERROR, err);
          reject(err);
        });
    });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [REMIND_PASSWORD_SUCCESS]: (state, response) => {
    state.error = '';
    state.success = response.data.message;
  },
  [REMIND_PASSWORD_ERROR]: (state, err) => {
    state.success = '';
    state.error = err.response.data.message;
  },
  [SET_PASSWORD_ERROR]: (state, err) => {
    state.error2 = err.response.data.message;
  },
};
/* eslint-enable no-shadow */

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
