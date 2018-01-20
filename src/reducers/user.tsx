import { StoreState, ActionTypes } from '../types';
import { UserAction } from '../actions';
export default function user(state: StoreState = {}, action: UserAction) {
  switch (action.type) {
    case ActionTypes.USER_LOGGED_IN:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
