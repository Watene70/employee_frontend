import { SET_CURRENT_USER } from "../actions/types";
import { isEmpty } from "../utils";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function red(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}