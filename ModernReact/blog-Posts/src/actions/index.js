import JSONPH from "../helpers/JSONPlaceHolder";
import lodash from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  lodash
    .chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const jsonRes = await JSONPH.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: jsonRes.data
  });
};

export const fetchUser = userId => async dispatch => {
  const jsonRes = await JSONPH.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: jsonRes.data
  });
};
