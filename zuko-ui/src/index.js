import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ToastContextProvider } from "./contexts/ToastContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ToastContextProvider>
            <App />
        </ToastContextProvider>
    </React.StrictMode>
);

serviceWorkerRegistration.register();
