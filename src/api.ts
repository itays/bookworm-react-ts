import axios, { AxiosResponse } from 'axios';
import { Credentials } from './types';
export default {
  user: {
    login: (credentials: Credentials) => {
      return axios.post('/api/auth', { credentials }).then((res: AxiosResponse) => res.data.user);
    },
    signup: (credentials: Credentials) => {
      return axios.post('/api/users', { user: credentials }).then((res: AxiosResponse) => res.data.user);
    }
      
  }
};
