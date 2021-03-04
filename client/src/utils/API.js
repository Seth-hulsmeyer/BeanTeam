import axios from "axios";

export default {
  createUser: function (formObject) {
    return axios.post("/api/signup", formObject);
  },
};
