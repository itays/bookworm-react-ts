import { Dispatch } from 'react-redux';
import { Credentials, ActionTypes } from '../types';
import api from '../api';

export const userLoggedInAction = (user: any) => ({
  type: ActionTypes.USER_LOGGED_IN,
  user
});

export const loginThunk = (credentials: Credentials) => (
  dispatch: Dispatch<any>
) =>
  api.user.login(credentials).then(user => dispatch(userLoggedInAction(user)));
