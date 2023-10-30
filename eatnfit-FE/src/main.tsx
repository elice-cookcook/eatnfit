import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "NanumSquareNeo-Variable",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
