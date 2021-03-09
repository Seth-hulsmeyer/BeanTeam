import React from "react";

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  videos: [
    {
      category: "",
      title: "",
      videoUrl: "",
    },
  ],
});

export default UserContext;
