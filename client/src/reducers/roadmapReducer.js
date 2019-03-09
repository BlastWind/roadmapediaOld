// the reducer is going to include the states
// where we check our actions, get item action...
// static data from the componenet to the reducer
import {
  GET_ROADMAPS,
  ADD_ROADMAP,
  DELETE_ROADMAP,
  ROADMAPS_LOADING,
  GET_ROADMAP_BY_ID
} from "../actions/types";

const initialState = {
  roadmaps: [],
  loading: false,
  current_roadmap: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROADMAPS:
      return {
        ...state,
        roadmaps: action.payload,
        loading: false
      };
    case DELETE_ROADMAP:
      return {
        ...state,
        roadmaps: state.roadmaps.filter(
          roadmap => roadmap._id !== action.payload
        )
      };

    case ADD_ROADMAP:
      return {
        ...state,
        roadmaps: [action.payload, ...state.items]
      };
    case ROADMAPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
