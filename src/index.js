import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { store } from "./StateManager/store";
// import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { AuthProvider } from "./Context/AuthProvider";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#b1b1d8",
      200: "#333333",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  </BrowserRouter>
);
