import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import axios from 'axios';

import { LOCALES } from '@/utils/constants';

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

export default i18n;
