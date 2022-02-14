import {
  RANDOM_ACTIVITY,
  SET_ACTIVITY,
  SET_FILTER,
  SET_ERROR,
} from "../actions/types";

const initialState = {
  history: [],
  activity: {},
  filter: {},
  error: {},
};

const activity = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_ACTIVITY:
      return {
        ...state,
        history: [action.payload, ...state.history],
        activity: action.payload,
        error: {},
      };
    case SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        error: {},
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default activity;
