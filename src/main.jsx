import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@coinbase/onchainkit/styles.css";

localStorage.theme = 'light'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
