import React from "react";
import BackEndContext from "./backendContext";
// const weblink = "https://i-chat-ndi8.onrender.com/";
const BackendState = (props) => {
  // http://localhost:5000/
  const state = {
    // weblink: "http://localhost:5000/",
    weblink: "https://i-chat-ndi8.onrender.com/",
    name: "hemant",
  };

  return (
    <BackEndContext.Provider value={state}>
      {props.children}
    </BackEndContext.Provider>
  );
};
export default BackendState;
