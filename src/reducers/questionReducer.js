import { GET_QUESTIONS, GET_QUESTIONS_ERROR } from "../actions/types";

const initialState = {
  questions: [],
  question_errors: {},
};

export default function red(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        question_errors: action.payload,
      };
    default:
      return state;
  }
}
