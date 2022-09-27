import { SHOWPARTS } from "../actions/types";

const partReducer = (state = false, action) => {
  switch (action.type) {
    case SHOWPARTS:
      return {
        ...state,
        showParts: action.payload,
      };

    default:
      return state;
  }
};

export default partReducer;
