import Vue from 'vue';

import {
  USER_REQUEST,
  USER_ERROR,
  USER_SUCCESS,
  SEND_VERIFY_EMAIL,
  SEND_VERIFY_EMAIL_SUCCESS,
  SEND_VERIFY_EMAIL_ERROR,
} from '@/store/actions/user';
import { AUTH_LOGOUT } from '@/store/actions/auth';

import api from '@/utils/api';
import storage from '@/utils/storage'; // eslint-disable line

const state = {
  status: '',
  profile: {},
  email: '',
};

/* eslint-disable no-shadow */
const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.username,
  email: state => state.email,
};
/* eslint-enable no-shadow */

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST);
      api.getUserProfile()
        .then((response) => {
          commit(USER_SUCCESS, response);
          storage.setUserProfile(response);
          resolve(response);
        })
        .catch((err) => {
          commit(USER_ERROR);
          // if resp is unauthorized, logout, to
          dispatch('auth/AUTH_LOGOUT', null, { root: true });
          reject(err);
        });
    });
  },
  [SEND_VERIFY_EMAIL]: ({ commit }) => {
    const usermail = localStorage.getItem('user-mail');
    return new Promise((resolve, reject) => {
      api.postVerifyEmail(usermail)
        .then((response) => {
          commit(SEND_VERIFY_EMAIL_SUCCESS);
          resolve(response);
        })
        .catch((err) => {
          commit(SEND_VERIFY_EMAIL_ERROR);
          reject(err);
        });
    });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [USER_SUCCESS]: (state, response) => {
    state.status = 'success';
    Vue.set(state, 'profile', response.data.user);
  },
  [USER_ERROR]: (state) => {
    state.status = 'error';
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
  },
  [SEND_VERIFY_EMAIL_SUCCESS]: (state) => {
    state.email = 'success';
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
