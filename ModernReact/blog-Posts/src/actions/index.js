import JSONPH from "../helpers/JSONPlaceHolder";
import lodash from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const uniqueUserIdsInPosts = lodash.uniq(
    lodash.map(getState().posts, "userId")
  );
  uniqueUserIdsInPosts.forEach(userId => {
    dispatch(fetchUser(userId));
  });
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
