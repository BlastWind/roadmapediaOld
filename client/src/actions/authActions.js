import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_CURRENT_USER,
  SAVE_ROADMAPS_TO_USER,
  GET_ROADMAPS_BY_USER,
  GET_SAVED_ROADMAPS_BY_USER,
  UPLOAD_PROFILE_PICTURE,
  PROFILE_PIC_UPDATE,
  BIO_TEXT_UPDATE
} from "./authActionTypes";
// Register User
export const registerUser = (userData, history) => dispatch => {

  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {

      // Save to localStorage
      // Set token to localStorage

      const { token } = res.data;

      localStorage.setItem("jwtToken", token);

      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = {
        payload_token: jwt_decode(token),
        payload_picture: res.data.profile_picture,
        payload_bio: res.data.bio
      };
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const getCurrentUser = () => {
  return {
    type: GET_CURRENT_USER
  };
};

export const uploadProfilePicture = stuff => dispatch => {
  return axios
    .post("/api/users/uploadProfilePicture", stuff)
    .then(dispatch({ type: GET_CURRENT_USER }));
};

export const saveRoadmapToUser = ids => dispatch => {
  return axios
    .put("/api/users/saveroadmaptouser", ids)
    .then(dispatch({ type: SAVE_ROADMAPS_TO_USER }));
};

export const getRoadmapByUser = id => dispatch => {
  return axios
    .post("/api/users/getroadmapbyuser", id)
    .then(res => dispatch({ type: GET_ROADMAPS_BY_USER, payload: res.data }));
};

export const getSavedRoadmapByUser = id => dispatch => {
  return axios
    .post("/api/users/getSavedRoadmapByUser", id)
    .then(res =>
      dispatch({ type: GET_SAVED_ROADMAPS_BY_USER, payload: res.data })
    );
};

export const profilePicUpdate = picture => dispatch => {
  return axios.put("/api/users/profilePicUpdate", picture).then(res => {

    dispatch({ type: PROFILE_PIC_UPDATE, payload: res.data });
  });
};

export const bioTextUpdate = stuff => dispatch => {
  return axios.put("/api/users/bioTextUpdate", stuff).then(res => {

    dispatch({ type: BIO_TEXT_UPDATE, payload: res.data });
  });
};
