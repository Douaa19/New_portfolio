import { SHOWPROJECT, SHOWSERVICE, SHOWINFOS } from "./types";

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

export const infoAction = (show) => {
  return {
    type: SHOWINFOS,
    payload: show,
  };
};
