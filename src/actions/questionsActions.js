import Swal from "sweetalert2";
import { GET_QUESTIONS, GET_QUESTIONS_ERROR } from "./types";
import {axios} from "../utils"
// get all riders
export const getAllAssessment = () => (dispatch) => {
  let url = `assessment/getAllAssessment`;
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: response.data,
      });
    })
    .catch((error) => {
      if (error.message) {
        Swal.fire("Error", error.message, "error");
        dispatch({
          type: GET_QUESTIONS_ERROR,
          payload: error.message,
        });
      } else {
        Swal.fire("Error", error.response.data.message, "error");
        dispatch({
          type: GET_QUESTIONS_ERROR,
          payload: error.response.data,
        });
      }
    });
};
