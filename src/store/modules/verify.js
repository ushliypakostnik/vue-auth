/* eslint-disable promise/param-names */
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
  // eslint-disable-next-line arrow-body-style
  [SET_VERIFY]: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      api.postVerify(id)
        .then((response) => {
          commit(SET_VERIFY_RESULT, response.data.success.message);
          resolve(response);
        })
        .catch((err) => {
          commit(SET_VERIFY_RESULT, err.response.data.error.message);
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
