import { SHOWTECHNOS } from "../actions/types";

const technoReducer = (state = false, action) => {
  switch (action.type) {
    case SHOWTECHNOS:
      return {
        ...state,
        showTechnos: action.payload,
      };

    default:
      return state;
  }
};

export default technoReducer;
