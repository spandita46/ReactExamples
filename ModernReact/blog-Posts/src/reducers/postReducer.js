export default (oldPosts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }
  return oldPosts;
};
