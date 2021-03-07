import axios from "axios";

export default {
  createUser: function (formObject) {
    return axios.post("/api/signup", formObject);
  },
  getUsers: function () {
    return axios.get("/api/users/:id");
  },
  // Gets user videos
  getVideos: function () {
    return axios.get("/api/video");
  },
  // Deletes the video with the given id
  deleteVideo: function (id) {
    return axios.delete("/api/video/" + id);
  },
};
