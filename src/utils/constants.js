const isProd = process.env.NODE_ENV === 'production';
const apiUrl = process.env.VUE_APP_API_URL;
const clientHost = process.env.VUE_APP_CLIENT_HOST;

export const API_URL = isProd ? apiUrl || 'https://express-auth.kafedra.org' : apiUrl || 'https://localhost:8082';

export const CLIENT_HOST = isProd ? clientHost || 'https://vue-auth.kafedra.org' : clientHost || 'https://localhost:3000';

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
