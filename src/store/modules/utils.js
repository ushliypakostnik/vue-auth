import {
  SET_LANGUAGE,
  CHANGE_LANGUAGE,
} from '@/store/actions/utils';

import i18n from '@/utils/i18n';
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
    return new Promise((resolve, reject) => {
      i18n.changeLanguage(language)
        .then((t) => {
          commit(SET_LANGUAGE, language);
          storage.rememberLanguage(language);
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
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
