import { createReducer } from "../../app/common/util/reducerUtils";
import {
  ASYNC_ACTIONS_START,
  ASYNC_ACTIONS_FINISH,
  ASYNC_ACTIONS_ERROR
} from "./asyncConstants";

const initialState = {
  loading: false
};

const asyncActionStarted = state => {
  return {
    ...state,
    loading: true
  };
};
const asyncActionFinished = state => {
  return {
    ...state,
    loading: false
  };
};
const asyncActionError = state => {
  return {
    ...state,
    loading: false
  };
};

export default createReducer(initialState, {
  [ASYNC_ACTIONS_START]: asyncActionStarted,
  [ASYNC_ACTIONS_FINISH]: asyncActionFinished,
  [ASYNC_ACTIONS_ERROR]: asyncActionError
});
