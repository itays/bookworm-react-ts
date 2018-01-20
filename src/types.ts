export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export enum ActionTypes {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
}
export interface Credentials {
  email: string;
  password: string;
}

export interface StoreState {
  user?: any;
}
