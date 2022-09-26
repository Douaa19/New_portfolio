import { SHOWPROJECT } from "../actions/types";

const projectReducer = (state = false, action) => {
  switch (action.type) {
    case SHOWPROJECT:
      return {
        ...state,
        showProjects: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
