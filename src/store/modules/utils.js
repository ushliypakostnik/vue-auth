import {
  SET_LANGUAGE,
  CHANGE_LANGUAGE,
} from '@/store/actions/utils';

import storage from '@/utils/storage';

import { AUTO_LANG } from '@/utils/constants';

const state = {
  language: AUTO_LANG || '',
};

/* eslint-disable no-shadow */
const getters = {
  language: state => state.language,
};
/* eslint-enable no-shadow */

const actions = {
  [CHANGE_LANGUAGE]: ({ commit }, language) => {
    commit(SET_LANGUAGE, language);
    storage.rememberLanguage(language);
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [SET_LANGUAGE]: (state, language) => {
    state.language = language;
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
