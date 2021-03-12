import axios from "axios";

export default {
  createUser: function (formObject) {
    return axios.post("/api/signup", formObject);
  },
  getCurrentUser: function () {
    return axios.get("/api/users/current");
  },
  // Gets user videos
  getVideos: function () {
    return axios.get("/api/video");
  },
  // Deletes the video with the given id
  deleteVideo: function (id) {
    return axios.delete("/api/delete-video/" + id);
  },
  addVideo: function (newTopicsData) {
    return axios.put("/api/add-video", newTopicsData);
  },

  getPasswordStrength: function (password) {
    return axios.post("/api/checkpassword", {password: password})
  }
};
