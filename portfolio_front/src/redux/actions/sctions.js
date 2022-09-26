import { SHOWPROJECT } from "./types";

export const projectAction = (show) => {
  return {
    type: SHOWPROJECT,
    payload: show,
  };
};
