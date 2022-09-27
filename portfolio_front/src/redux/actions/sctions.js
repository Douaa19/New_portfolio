import { SHOWPROJECT, SHOWSERVICE } from "./types";

export const projectAction = (show) => {
  return {
    type: SHOWPROJECT,
    payload: show,
  };
};

export const serviceAction = (show) => {
  return {
    type: SHOWSERVICE,
    payload: show,
  };
};
