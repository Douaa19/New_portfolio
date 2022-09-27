import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import serviceReducer from "./serviceReducer";

export default combineReducers({
  showProjects: projectReducer,
  showServices: serviceReducer,
});
