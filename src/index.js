import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { store } from "./StateManager/store";
// import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#b1b1d8",
      200: "#333333"
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    {/* </Provider> */}
  </BrowserRouter>
);
