import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ActionContextProvider } from "./context/ActionContext";

ReactDOM.render(
  <React.StrictMode>
    <ActionContextProvider>
      <App />
    </ActionContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
