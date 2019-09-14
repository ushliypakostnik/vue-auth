import {
  REMIND_PASSWORD,
  REMIND_PASSWORD_SUCCESS,
  REMIND_PASSWORD_ERROR,
  SET_PASSWORD,
} from '@/store/actions/pass';

import router from '@/router';

import api from '@/utils/api';

const state = {
  error: '',
  success: '',
};

/* eslint-disable no-shadow */
const getters = {
  error: state => state.error,
  success: state => state.success,
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
  [SET_PASSWORD]: (user) => {
    return new Promise((resolve, reject) => {
      api.postNewPassword({ id: user.id, password: user.password })
        .then((response) => {
          router.replace({ name: 'Home' });
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
  [REMIND_PASSWORD_SUCCESS]: (state, response) => {
    state.error = '';
    state.success = response.data.message;
  },
  [REMIND_PASSWORD_ERROR]: (state, err) => {
    state.success = '';
    state.error = err.response.data.message;
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
