import { SHOWINFOS } from "../actions/types";

const infoReducer = (state = false, action) => {
  switch (action.type) {
    case SHOWINFOS:
      return {
        ...state,
        showInfos: action.payload,
      };

    default:
      return state;
  }
};

export default infoReducer;