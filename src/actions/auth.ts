import { Dispatch } from 'react-redux';
import { USER_LOGGED_IN } from '../types';
import api from '../api';
type Credentials = {
  email: string;
  password: string;
};

export const userLoggedInAction = (user: any) => ({
  type: USER_LOGGED_IN,
  user
});

export const loginThunkAction = (credentials: Credentials) => (
  dispatch: Dispatch<any>
) =>
  api.user.login(credentials).then(user => dispatch(userLoggedInAction(user)));
