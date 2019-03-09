import {
  SET_CURRENT_USER,
  USER_LOADING,
  GET_CURRENT_USER,
  SAVE_ROADMAPS_TO_USER,
  GET_ROADMAPS_BY_USER,
  GET_SAVED_ROADMAPS_BY_USER,
  PROFILE_PIC_UPDATE,
  BIO_TEXT_UPDATE
} from "../actions/authActionTypes";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  user_saved_roadmaps: [],
  other_author_created_roadmaps: [],
  user_profile_pic: "",
  user_profile_bio: "",
  author_profile_pic: "",
  author_bio: ""
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      initialState.isAuthenticated = !isEmpty(action.payload.payload_token);
      initialState.user = action.payload.payload_token;


      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.payload_token),
        user: action.payload.payload_token,
        user_profile_pic: action.payload.payload_picture,
        user_profile_bio: action.payload.payload_bio
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_USER:
      const returnUser = initialState.user;
      return {
        returnUser
      };

    case SAVE_ROADMAPS_TO_USER:
      return { ...state };
    case GET_SAVED_ROADMAPS_BY_USER:
      return {
        ...state,
        user_saved_roadmaps: action.payload
      };
    case GET_ROADMAPS_BY_USER:
      return {
        ...state,
        other_author_created_roadmaps: action.payload.createdRoadmap,
        author_bio: action.payload.bio,
        author_profile_pic: action.payload.profile_pic
      };
    case PROFILE_PIC_UPDATE:
      return { ...state, user_profile_pic: action.payload };
    case BIO_TEXT_UPDATE:
      return { ...state, user_profile_bio: action.payload };
    default:
      return state;
  }
}
