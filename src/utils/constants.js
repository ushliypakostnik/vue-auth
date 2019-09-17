const isProd = process.env.NODE_ENV === 'production';
const apiUrl = process.env.API_URL;
const clientHost = process.env.CLIENT_HOST;

export const API_URL = isProd ? apiUrl || 'http://express-auth.kafedra.org' : apiUrl || 'http://127.0.0.1:8082';

export const CLIENT_HOST = isProd ? clientHost || 'http://vue-auth.kafedra.org' : clientHost || 'http://localhost:3000';

export const COOKIES = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
};

export const UTILS = {
  min_password_lenght: 6,
};

export const MESSAGES = {
  verify_account: 'Verify your account! A confirmation email has been sent to your inbox',
  resend_verify_email: 'Letter sent successfully',
  email_must_be_valid: 'Must be valid e-mail',
  email_required: 'E-mail is required',
  password_required: 'Password is required',
  password_min_lenght: `Password must be at least ${UTILS.min_password_lenght} characters`,
  password_contain_digit: 'Password must contain lowercase latin letters and at least one digit',
  passwords_do_not_match: 'Passwords do not match',
};

export const LOCAL = {
  profile: 'profile',
};

export const LOCALES = {
  en: {
    verifcation: {
      verify_account: 'Verify your account! A confirmation email has been sent to your inbox',
      resend_verify_email: 'Letter sent successfully',
      email_must_be_valid: 'Must be valid e-mail',
      email_required: 'E-mail is required',
      password_required: 'Password is required',
      password_min_lenght: `Password must be at least ${UTILS.min_password_lenght} characters`,
      password_contain_digit: 'Password must contain lowercase latin letters and at least one digit',
      passwords_do_not_match: 'Passwords do not match',
    },
  },
  ru: {
    verifcation: {
      verify_account: 'Подтвердите ваш аккаунт! Письмо с подтверждением было отправлено на Ваш почтовый ящик',
      resend_verify_email: 'Письмо успешно отправлено',
      email_must_be_valid: 'Неверный адрес электронной почты',
      email_required: 'Необходимо ввести адрес электронной почты',
      password_required: 'Необходимо ввести пароль',
      password_min_lenght: `Пароль должен быть хотя бы ${UTILS.min_password_lenght} символов длинной`,
      password_contain_digit: 'Пароль должен содержать строчные латинские буквы и хотя бы одну цифру',
      passwords_do_not_match: 'Пароли не совпадают',
    },
  },
};
