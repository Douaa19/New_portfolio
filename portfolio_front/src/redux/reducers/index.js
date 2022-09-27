import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import serviceReducer from "./serviceReducer";
import infoReducer from "./infoReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
  showProjects: projectReducer,
  showServices: serviceReducer,
  showInfos: infoReducer,
  showClients: clientReducer,
});
