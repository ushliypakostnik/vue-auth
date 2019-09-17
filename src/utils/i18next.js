import Vue from 'vue';
import i18next from 'i18next';
import VueParams from 'vue-params';
import VueI18Next from 'vue-i18next2';

import { LOCALES } from './constants';

Vue.use(VueParams);
Vue.use(VueI18Next);

Vue.params.i18nextLanguage = "ru";

i18next.init({
  lng: Vue.params.i18nextLanguage,
  fallbackLng: 'en',
  fallbackNS: ['translation'],
  resources: {
    en: { translation: LOCALES.en },
    de: { translation: LOCALES.de },
  },
});
