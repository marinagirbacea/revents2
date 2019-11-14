import { createReducer } from "../../app/common/util/reducerUtils";
import {
  ASYNC_ACTIONS_START,
  ASYNC_ACTIONS_FINISH,
  ASYNC_ACTIONS_ERROR
} from "./asyncConstants";

const initialState = {
  loading: false,
  elementName:null
};

const asyncActionStarted = (state,payload) => {
  return {
    ...state,
    loading: true,
    elementName:payload
  };
};
const asyncActionFinished = state => {
  return {
    ...state,
    loading: false,
    elementName:null
  };
};
const asyncActionError = state => {
  return {
    ...state,
    loading: false,
    elementName:null
  };
};

export default createReducer(initialState, {
  [ASYNC_ACTIONS_START]: asyncActionStarted,
  [ASYNC_ACTIONS_FINISH]: asyncActionFinished,
  [ASYNC_ACTIONS_ERROR]: asyncActionError
});
