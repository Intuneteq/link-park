import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import "swiper/css/bundle";

import "./index.css";
import App from "./App";
import { AuthProvider } from "./Context/AuthProvider";
import { AppProvider } from "./Context/AppProvider";

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
    <NextUIProvider>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </AppProvider>
      </ChakraProvider>
    </NextUIProvider>
  </BrowserRouter>
);
