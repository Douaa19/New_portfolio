import { SHOWSERVICE } from "../actions/types";

const serviceReducer = (state = false, action) => {
  switch (action.type) {
    case SHOWSERVICE:
      return {
        ...state,
        showServices: action.payload,
      };

    default:
      return state;
  }
};

export default serviceReducer;
