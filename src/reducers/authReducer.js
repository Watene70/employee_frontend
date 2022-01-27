import { SET_CURRENT_USER, LOGIN_ERRORS } from "../actions/types";
import { isEmpty } from "../utils";

const initialState = {
  isAuthenticated: false,
  user: {},
  login_error: {},
};

export default function red(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case LOGIN_ERRORS:
      return {
        ...state,
        login_error: action.payload,
      };
    default:
      return state;
  }
}
