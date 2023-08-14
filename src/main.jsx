import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './styles/normalize.css'
import "./styles/global.css";
// import './styles/style.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
