import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "63c01db4745947898f6411debb1d6f45",
  },
});
