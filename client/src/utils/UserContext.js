import React, { createContext } from "react";

const UserContext = createContext({
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
