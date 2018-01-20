import axios, { AxiosResponse } from 'axios';
import { Credentials } from './types';
export default {
  user: {
    login: (credentials: Credentials) =>
      axios
        .post('/api/auth', { credentials })
        .then((res: AxiosResponse) => res.data.user)
  }
};
