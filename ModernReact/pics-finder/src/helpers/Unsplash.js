import axios from "axios";

export default axios.create({
  headers: {
    Authorization:
      "Client-ID f7d5db760d144427045caf4dd95d083e1ed63b817e5d6739630230c542aef280"
  },
  baseURL: "https://api.unsplash.com"
});
