import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { store } from "./StateManager/store";
import { Provider } from "react-redux";

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

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AppProvider>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </AppProvider>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
