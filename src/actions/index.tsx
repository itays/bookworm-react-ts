import { ActionTypes } from '../types';
export interface UserLoggedIn {
  type: ActionTypes.USER_LOGGED_IN;
  user?: any;
}

export interface UserLoggedOut {
  type: ActionTypes.USER_LOGGED_OUT;
}

export type UserAction = UserLoggedIn | UserLoggedOut;

export const userLoggedIn = (user: any): UserLoggedIn => ({
  type: ActionTypes.USER_LOGGED_IN,
  user
});
