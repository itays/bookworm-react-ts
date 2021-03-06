import { ActionTypes, UserStore } from '../types';
import { Dispatch } from 'react-redux';
import api from '../api';
import { Credentials } from '../types';
export interface UserLoggedIn {
  type: ActionTypes.USER_LOGGED_IN;
  user?: any;
}

export interface UserLoggedOut {
  type: ActionTypes.USER_LOGGED_OUT;
}

export type UserAction = UserLoggedIn | UserLoggedOut;

export const userLoggedIn = (user: UserStore): UserLoggedIn => ({
  type: ActionTypes.USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: ActionTypes.USER_LOGGED_OUT
});

export const signupThunk = (credentials: Credentials) => (dispatch: Dispatch<ActionTypes.USER_SIGNUP>
) => {
  return api.user.signup(credentials).then(user => {
    sessionStorage.setItem('bookwormJWT', user.token);
    dispatch(userLoggedIn(user));
  });
};

export const confirmThunk = (token: string) => (dispatch: Dispatch<ActionTypes.CONFIRM_EMAIL>) => {
  return api.user.confirm(token).then((user: UserStore) => {
    sessionStorage.setItem('bookwormJWT', user.token);
    dispatch(userLoggedIn(user));
  });
};
