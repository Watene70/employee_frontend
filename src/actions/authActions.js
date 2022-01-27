import { axios, setAuthToken } from "../utils";
import { SET_CURRENT_USER, LOGIN_ERRORS } from "./types";
import Swal from "sweetalert2";

// set current logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// login user
export const loginUser = (personnel, history) => (dispatch) => {
  let url = `users/login`;
  axios
    .post(url, personnel)
    .then((response) => {
      history.push("/home");
      const { accessToken } = response.data.token;

      // set token to local storage
      localStorage.setItem("assessmentJwt", accessToken);

      // store user
      localStorage.setItem("atlasuser", JSON.stringify(response.data.user));

      // set token to auth header
      setAuthToken(accessToken);

      // set current user
      dispatch(setCurrentUser(response.data.user));
    })
    .catch((error) => {
      if (error.response.data.message) {
        Swal.fire("Error", error.response.data.message, "error");
        dispatch({
          type: LOGIN_ERRORS,
          payload: error.response.data,
        });
      } else {
        if (error.message) {
          Swal.fire("Error", error.message, "error");
          dispatch({
            type: LOGIN_ERRORS,
            payload: error.message,
          });
        }
      }
    });
};

