import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import serviceReducer from "./serviceReducer";
import infoReducer from "./infoReducer";

export default combineReducers({
  showProjects: projectReducer,
  showServices: serviceReducer,
  showInfos: infoReducer,
});
