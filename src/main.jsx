import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TrackVisibility from "react-on-screen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrackVisibility>
      <App />
    </TrackVisibility>
  </React.StrictMode>
);
