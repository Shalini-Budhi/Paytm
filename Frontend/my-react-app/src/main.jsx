import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TravelProvider from "./Context/TravelContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TravelProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TravelProvider>
  </React.StrictMode>,
);
