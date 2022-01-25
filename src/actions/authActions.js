import { axios, setAuthToken } from "../utils";
import { SET_CURRENT_USER } from "./types";
// import Swal from "sweetalert2";

// set current logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
