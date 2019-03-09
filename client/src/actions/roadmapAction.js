import {
  GET_ROADMAPS,
  ADD_ROADMAP,
  DELETE_ROADMAP,
  ROADMAPS_LOADING,
  GET_ROADMAP_BY_ID
} from "./types";
import axios from "axios";

export const getRoadmaps = () => dispatch => {
  dispatch(setRoadmapsLoading());
  return axios
    .get("/api/roadmaps")
    .then(res => dispatch({ type: GET_ROADMAPS, payload: res.data }));
};

export const addRoadmap = requestBody => dispatch => {

  axios.post("/api/roadmaps", requestBody);
};

export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)

    .then(res => dispatch({ type: DELETE_ROADMAP, payload: id }));
};

export const setRoadmapsLoading = () => {
  return {
    type: ROADMAPS_LOADING
  };
};

//UI calls addItem in action.js, addItem is going to express js and the router part
// then the router says to take in whatever we sent them and make a new item,
// then save it into the database
