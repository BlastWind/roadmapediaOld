import { combineReducers } from "redux";
import authReducer from "./authReducer";
import roadmapReducer from "./roadmapReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  roadmap: roadmapReducer,
  auth: authReducer,
  errors: errorReducer
});
