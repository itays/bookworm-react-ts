import { ActionTypes, UserStore } from '../types';
import { UserAction } from '../actions';
const initialState = {
  email: '',
  token: '',
};
export default function user(state: UserStore = initialState, action: UserAction) {
  switch (action.type) {
    case ActionTypes.USER_LOGGED_IN:
      return action.user;
    case ActionTypes.USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
