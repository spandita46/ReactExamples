import JSONPH from "../helpers/JSONPlaceHolder";
import lodash from "lodash";

export const fetchPosts = () => async dispatch => {
  const jsonRes = await JSONPH.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: jsonRes.data
  });
};

export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);
const _fetchUser = lodash.memoize(async (userId, dispatch) => {
  const jsonRes = await JSONPH.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: jsonRes.data
  });
});
