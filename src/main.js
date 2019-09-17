import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';

import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import { LOCALES } from './utils/constants';

Vue.use(VueI18Next);

i18next.init({
  lng: 'ru',
  fallbackLng: 'en',
  resources: {
    en: { translation: LOCALES.en },
    ru: { translation: LOCALES.ru },
  },
});

const i18n = new VueI18Next(i18next);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n: i18n,
  render: h => h(App),
}).$mount('#app');
