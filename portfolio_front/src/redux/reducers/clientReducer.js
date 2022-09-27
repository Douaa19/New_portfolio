import { SHOWCLIENTS } from "../actions/types";

const clientReducer = (state = false, action) => {
  switch (action.type) {
    case SHOWCLIENTS:
      return {
        ...state,
        showClients: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;