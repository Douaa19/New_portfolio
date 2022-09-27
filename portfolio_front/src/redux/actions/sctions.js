import { SHOWPROJECT, SHOWSERVICE, SHOWINFOS, SHOWCLIENTS } from "./types";

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

export const clientAction = (show) => {
  return {
    type: SHOWCLIENTS,
    payload: show,
  };
};
