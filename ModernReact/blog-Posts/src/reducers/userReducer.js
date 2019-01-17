export default (oldUsers = [], action) => {
  if (action.type === "FETCH_USER") {
    return [...oldUsers, action.payload];
  }
  return oldUsers;
};
