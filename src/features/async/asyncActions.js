import {
  ASYNC_ACTIONS_START,
  ASYNC_ACTIONS_FINISH,
  ASYNC_ACTIONS_ERROR
} from "./asyncConstants";

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTIONS_START
  };
};
export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTIONS_FINISH
  };
};
export const asyncActionError = () => {
  return {
    type: ASYNC_ACTIONS_ERROR
  };
};
