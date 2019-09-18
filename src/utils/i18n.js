import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import {
  LANGUAGES,
  LOCALES,
  AUTO_LANG,
} from '@/utils/constants';

Vue.use(VueI18Next);

i18next.init({
  lng: AUTO_LANG,
  fallbackLng: LANGUAGES[0].name,
  resources: {
    [LANGUAGES[0].name]: { translation: LOCALES[LANGUAGES[0].name] },
    [LANGUAGES[1].name]: { translation: LOCALES[LANGUAGES[1].name] },
  },
});

const i18n = new VueI18Next(i18next);

export default i18n;
