import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const modeTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const colorTheme = extendTheme({
  colors: {
    primary: "#3F72AF",
    primary2: "#1a3826",
    background: "#DBE2EF",
    text: "#383838",
    btn: 'linear-gradient(135deg, orange 60%, cyan)'
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider
      theme={colorTheme}
      initialColorMode={modeTheme.config.initialColorMode}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
