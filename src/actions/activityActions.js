import { RANDOM_ACTIVITY, SET_ACTIVITY, SET_ERROR, SET_FILTER } from "./types";
import axios from "axios";

export const fetchRandomActivity = (filter) => (dispatch) => {
  if (filter && Object.keys(filter).length > 0 && filter.useFilter === true) {
    axios
      .get("https://www.boredapi.com/api/activity/", {
        params: {
          type: filter.type === "all" ? "" : filter.type,
          participants: filter.participants,
          minprice: filter.price.min,
          maxprice: filter.price.max,
          minaccessibility: filter.accessability.min,
          maxaccessibility: filter.accessability.max,
        },
      })
      .then((response) => {
        if (response.data.error) {
          dispatch({
            type: SET_ERROR,
            payload: response.data,
          });
        } else {
          dispatch({
            type: RANDOM_ACTIVITY,
            payload: response.data,
          });
        }
      });
  } else {
    axios.get("https://www.boredapi.com/api/activity/").then((response) => {
      if (response.data.error) {
        dispatch({
          type: SET_ERROR,
          payload: response.data,
        });
      } else {
        dispatch({
          type: RANDOM_ACTIVITY,
          payload: response.data,
        });
      }
    });
  }
};

export const setShowActivity = (activity) => (dispatch) => {
  dispatch({
    type: SET_ACTIVITY,
    payload: activity,
  });
};

export const setFilter = (filter) => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    payload: filter,
  });
};
