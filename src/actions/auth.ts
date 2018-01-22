import { Dispatch } from 'react-redux';
import { Credentials, ActionTypes } from '../types';
import { userLoggedIn } from './index';
import api from '../api';

export const loginThunk = (credentials: Credentials) => (
  dispatch: Dispatch<ActionTypes.USER_LOGGED_IN>
) =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
