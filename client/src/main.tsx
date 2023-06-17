import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home.tsx";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ffffff",
      200: "#e6e6e6",
      300: "#4de9aa",
      400: "#20e395",
      500: "#17b978",
      600: "#118c5b",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
