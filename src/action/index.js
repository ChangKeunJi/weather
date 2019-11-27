// Action Creator with Async API call.

import axios from "axios";

export const fetchData = city => async dispatch => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=ce271c3a6b37df8991ba40ccf3c14710`
    )
    .then(res => {
      dispatch({ type: "FETCH_DATA", payload: res.data });
    })
    .catch(error => {
      dispatch({ type: "FETCH_ERROR", payload: error.response });
    });
};
