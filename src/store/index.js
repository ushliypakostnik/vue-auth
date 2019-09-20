import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import verify from './modules/verify';
import pass from './modules/pass';
import user from './modules/user';
import utils from './modules/utils';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    verify,
    pass,
    user,
    utils,
  },
  strict: debug,
});
