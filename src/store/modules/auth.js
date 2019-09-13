/* eslint-disable promise/param-names */
import {
  AUTH_REQUEST,
  AUTH_FACEBOOK_REQUEST,
  AUTH_VKONTAKTE_REQUEST,
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
          // dispatch('user/USER_REQUEST', null, { root: true });
          resolve(response);
        })
        .catch((err) => {
          commit(AUTH_ERROR, err);
          storage.deleteAuth();
          reject(err);
        });
    });
  },
  [AUTH_FACEBOOK_REQUEST]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_FACEBOOK_REQUEST);
      api.postFBAuth()
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  [AUTH_VKONTAKTE_REQUEST]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_VKONTAKTE_REQUEST);
      api.postVKAuth()
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
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
  },
  [AUTH_FACEBOOK_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_VKONTAKTE_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.token = token;
    state.status = 'success';
    state.error = '';
  },
  [AUTH_ERROR]: (state, err) => {
    state.status = 'error';
    state.error = err.response.data.message;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
    state.error = '';
    state.status = '';
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
