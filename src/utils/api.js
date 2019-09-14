import axios from 'axios';

import { API_URL } from '@/utils/constants';

export default ({

  // Auth

  postAuth: user =>
    axios.post(`${API_URL}/api/user/login`, { user }),

  getFBAuth: () =>
    axios.get(`${API_URL}/api/user/facebook`),

  getVKAuth: () =>
    axios.get(`${API_URL}/api/user/vkontakte`),

  postVerifyEmail: usermail =>
    axios.post(`${API_URL}/api/user/send-verify-email`, { usermail }),

  postRemindPassword: usermail =>
    axios.post(`${API_URL}/api/user/remind`, { usermail }),

  postNewPassword: user =>
    axios.post(`${API_URL}/api/user/password`, { user }),

  getLogout: () =>
    axios.get(`${API_URL}/api/user/logout`),

  // Verify

  postVerify: id =>
    axios.post(`${API_URL}/api/user/verify`, { id }),

  // User

  getUserProfile: () =>
    axios.get(`${API_URL}/api/user/profile`),

  // Test

  getTest: () =>
    axios.get(`${API_URL}/test`),
});
