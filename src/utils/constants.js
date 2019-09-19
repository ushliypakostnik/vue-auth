import Cookies from 'js-cookie';

const isProd = process.env.NODE_ENV === 'production';
const apiUrl = process.env.API_URL;
const clientHost = process.env.CLIENT_HOST;

export const API_URL = isProd ? apiUrl || 'http://express-auth.kafedra.org' : apiUrl || 'http://localhost:8082';

export const CLIENT_HOST = isProd ? clientHost || 'http://vue-auth.kafedra.org' : clientHost || 'http://localhost:3000';

export const COOKIES = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
  LANG: {
    name: 'language',
    expires: 7,
  },
};

export const LANGUAGES = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

// Auto language
const language = Cookies.get(COOKIES.LANG.name) || null;
export const AUTO_LANG = language || LANGUAGES[1].name;

export const UTILS = {
  min_password_lenght: 6,
};

export const LOCALSTORAGE = {
  profile: 'profile',
};

export const LOCALES = {
  [LANGUAGES[0].name]: {
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
    logo: {
      title: 'Vue cli based frontend boilerplate with authentication',
    },
    entry: {
      usercase: {
        remind: 'Remind Рassword ?',
        login: 'Login / Registration',
      },
    },
    login: {
      email: {
        aria: 'email',
        placeholder: 'Email',
      },
      password: {
        aria: 'password',
        placeholder: 'Password',
      },
      fb_button: {
        aria: 'Facebook login button',
        text: 'Via Facebook',
      },
      vk_button: {
        aria: 'VKontakte login button',
        text: 'Via VKontakte',
      },
      submit_button: {
        aria: 'login or registration button',
        text: 'Login / Registration',
      },
    },
    remind: {
      email: {
        aria: 'email for remind',
        placeholder: 'Email',
      },
      button: {
        aria: 'remind password button',
        text: 'Remind password',
      },
    },
    password: {
      password1: {
        aria: 'new password',
        placeholder: 'New password',
      },
      password2: {
        aria: 'new password again',
        placeholder: 'New password again',
      },
      button: {
        aria: 'set new password',
        text: 'Set new password',
      },
    },
    account: {
      header: 'Account',
      label_email: 'Email',
      label_verify: 'isVerify',
      logout_button: {
        aria: 'Sign out button',
        text: 'Sign Out',
      },
      verify_button: {
        aria: 'resend verify email',
        text: 'Resend verify email',
      },
    },
    page404: {
      text: 'Page not found!!!',
    },
  },
  [LANGUAGES[1].name]: {
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
    logo: {
      title: 'Основаннный на Vue cli стартовый проект фронтенда c аутентификацией',
    },
    entry: {
      usercase: {
        remind: 'Напомнить пароль ?',
        login: 'Вход / Регистриция',
      },
    },
    login: {
      email: {
        aria: 'ввод электронной почты',
        placeholder: 'Электронная почта',
      },
      password: {
        aria: 'ввод пароля',
        placeholder: 'Пароль',
      },
      fb_button: {
        aria: 'ввод через Facebook',
        text: 'Войти с Facebook',
      },
      vk_button: {
        aria: 'ввод через VKontakte',
        text: 'Войти с VKontakte',
      },
      submit_button: {
        aria: 'Войти или зарегистрироваться',
        text: 'Вход / Регистриция',
      },
    },
    remind: {
      email: {
        aria: 'электронной почты',
        placeholder: 'Электронная почта',
      },
      button: {
        aria: 'Отправить письмо с востановлением пароля',
        text: 'Напомнить пароль',
      },
    },
    password: {
      password1: {
        aria: 'Новый пароль',
        placeholder: 'Новый пароль',
      },
      password2: {
        aria: 'Новый пароль снова',
        placeholder: 'Новый пароль снова',
      },
      button: {
        aria: 'Установить пароль',
        text: 'Установить пароль',
      },
    },
    account: {
      header: 'Аккаунт',
      label_email: 'Электронная почта',
      label_verify: 'Верифицирован',
      logout_button: {
        aria: 'Выйти из аккаунта',
        text: 'Выйти',
      },
      verify_button: {
        aria: 'Отправить письмо с верификацией еще раз',
        text: 'Отправить еще раз',
      },
    },
    page404: {
      text: 'Страница не найдена!!!',
    },
  },
};
