import React from "react";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import Toast from "./components/Toast/Toast";

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
            <Toast />
        </div>
    );
}

export default App;
