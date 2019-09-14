import {
  SET_VERIFY,
  SET_VERIFY_RESULT,
} from '@/store/actions/verify';

import api from '@/utils/api';

const state = {
  result: '',
};

/* eslint-disable no-shadow */
const getters = {
  result: state => state.result,
};
/* eslint-enable no-shadow */

const actions = {
  [SET_VERIFY]: ({ commit }, id) => {
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
