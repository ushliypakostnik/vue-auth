import {
  SET_LANGUAGE,
} from '@/store/actions/utils';

import api from '@/utils/api';

const state = {
  language: '',
};

/* eslint-disable no-shadow */
const getters = {
  language: state => state.language,
};
/* eslint-enable no-shadow */

const actions = {
  [SET_LANGUAGE]: ({ commit }, language) => {
    return new Promise((resolve, reject) => {
      api.postVerify(id)
        .then((response) => {
          commit(SET_VERIFY_RESULT, response.data.message);
          resolve(response);
        })
        .catch((err) => {
          commit(SET_VERIFY_RESULT, err.response.data.message);
          reject(err);
        });
    });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [SET_VERIFY_RESULT]: (state, response) => {
    state.result = response;
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
