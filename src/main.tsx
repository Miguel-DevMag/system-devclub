import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { PreferencesProvider } from "@/preferences/PreferencesProvider";
import "./index.css";
import "./targeted-refresh.css";
import "./final-refresh.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </React.StrictMode>,
);
