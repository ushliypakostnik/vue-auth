import i18n from '@/utils/i18n';

import { UTILS } from '@/utils/constants';

export const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validate = regExp.test(email);
  return validate;
};

export const validatePassword = (password) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;
  const validate = regExp.test(password);
  return validate;
};

export const setEmailError = (email) => {
  if (email.length === 0) {
    return i18n.t('verifcation.email_required');
  // eslint-disable-next-line no-else-return
  } else if (validateEmail(email)) {
    return '';
  }
  return i18n.t('verifcation.email_must_be_valid');
};

export const setPasswordError = (password) => {
  const minLenght = UTILS.min_password_lenght;
  if (password.length === 0) {
    return i18n.t('verifcation.password_required');
  // eslint-disable-next-line no-else-return
  } else if (password.length < minLenght) {
    return i18n.t('verifcation.password_min_lenght');
  // eslint-disable-next-line no-else-return
  } else if (!validatePassword(password)) {
    return i18n.t('verifcation.password_contain_digit');
  }
  return '';
};
