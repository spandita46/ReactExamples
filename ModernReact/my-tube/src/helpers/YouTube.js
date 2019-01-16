import axios from "axios";

const KEY = "AIzaSyDqeJYNi42LrJqkPPwWvmClt9N4ASvZgJk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
