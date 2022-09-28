import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import serviceReducer from "./serviceReducer";
import infoReducer from "./infoReducer";
import clientReducer from "./clientReducer";
import partReducer from "./partReducer";
import technoReducer from "./technoReducer";

export default combineReducers({
  showProjects: projectReducer,
  showServices: serviceReducer,
  showInfos: infoReducer,
  showClients: clientReducer,
  showParts: partReducer,
  showTechnos: technoReducer,
});
