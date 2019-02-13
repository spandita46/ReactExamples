import Streams from "../helpers/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./actionTypes";

import History from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formData => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await Streams.post("/streams", { ...formData, userId });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  // Programmatic Navigation
  History.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await Streams.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream = streamId => async dispatch => {
  const response = await Streams.get(`/streams/${streamId}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const editStream = (streamId, formData) => async dispatch => {
  const response = await Streams.patch(`/streams/${streamId}`, formData);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  // Programmatic Navigation
  History.push("/");
};

export const deleteStream = streamId => async dispatch => {
  await Streams.delete(`/streams/${streamId}`);
  dispatch({
    type: DELETE_STREAM,
    payload: streamId
  });
};
