import {
  CHANGE_THEME,
  CHANGE_LANGUAGE,
} from '@/store/actions/utils';

import storage from '@/utils/storage';

import {
  AUTO_THEME,
  AUTO_LANG,
} from '@/utils/constants';

const state = {
  theme: AUTO_THEME,
  language: AUTO_LANG,
};

/* eslint-disable no-shadow */
const getters = {
  theme: state => state.theme,
  language: state => state.language,
};
/* eslint-enable no-shadow */

const actions = {
  [CHANGE_THEME]: ({ commit }, theme) => {
    commit(CHANGE_THEME, theme);
    storage.rememberTheme(theme);
  },
  [CHANGE_LANGUAGE]: ({ commit }, language) => {
    commit(CHANGE_LANGUAGE, language);
    storage.rememberLanguage(language);
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [CHANGE_THEME]: (state, theme) => {
    state.theme = theme;
  },
  [CHANGE_LANGUAGE]: (state, language) => {
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
