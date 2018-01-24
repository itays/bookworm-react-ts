import { Dispatch } from 'react-redux';
import { Credentials, ActionTypes, UserStore } from '../types';
import { userLoggedIn, userLoggedOut } from './index';
import api from '../api';

export const loginThunk = (credentials: Credentials) => (
  dispatch: Dispatch<ActionTypes.USER_LOGGED_IN>
) =>
  api.user.login(credentials).then((user: UserStore) => {
    sessionStorage.setItem('bookwormJWT', user.token);
    dispatch(userLoggedIn(user));
  });

export const logoutThunk = () => (dispatch: Dispatch<ActionTypes.USER_LOGGED_OUT>) => {
  sessionStorage.removeItem('bookwormJWT');
  dispatch(userLoggedOut());
};
