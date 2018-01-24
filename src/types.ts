export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export enum ActionTypes {
  USER_LOGGED_IN = 'USER_LOGGED_IN',
  USER_LOGGED_OUT = 'USER_LOGGED_OUT',
  USER_SIGNUP = 'USER_SIGNUP',
}
export interface Credentials {
  email: string;
  password: string;
}

export interface StoreState {
  user: UserStore;
}
export interface UserStore {
  email: string;
  token: string;
}

export type History = {
  push: (url: string) => void;
};
