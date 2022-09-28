import {
  SHOWPROJECT,
  SHOWSERVICE,
  SHOWINFOS,
  SHOWCLIENTS,
  SHOWPARTS,
  SHOWTECHNOS,
} from "./types";

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

export const partAction = (show) => {
  return {
    type: SHOWPARTS,
    payload: show,
  };
};

export const technoAction = (show) => {
  return {
    type: SHOWTECHNOS,
    payload: show,
  };
};
