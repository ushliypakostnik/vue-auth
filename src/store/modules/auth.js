/* eslint-disable promise/param-names */
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from '@/store/actions/auth';
// eslint-disable-next-line no-unused-vars
import { USER_REQUEST } from '@/store/actions/user';

import api from '@/utils/api';
import storage, { AutoAuth } from '@/utils/storage'; // eslint-disable line

const state = {
  status: '',
  token: AutoAuth || '',
  error: '',
};

/* eslint-disable no-shadow */
const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  error: state => state.error,
};
/* eslint-enable no-shadow */

const actions = {
  // eslint-disable-next-line arrow-body-style
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      api.postAuth(user)
        .then((response) => {
          const { token } = response.data.user;
          storage.setAuth(token);
          commit(AUTH_SUCCESS, token);
          dispatch('user/USER_REQUEST', null, { root: true });
          resolve(response);
        })
        .catch((err) => {
          commit(AUTH_ERROR, err);
          storage.deleteAuth();
          reject(err);
        });
    });
  },
  // eslint-disable-next-line arrow-body-style
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      api.getLogout()
        .then((response) => {
          storage.deleteAuth();
          storage.deleteUserProfile();
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
    state.error = '';
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = 'success';
    state.token = token;
    state.error = '';
  },
  [AUTH_ERROR]: (state, err) => {
    state.status = 'error';
    state.error = err.response.data.error.message;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
    state.error = '';
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
