import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
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

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <ChakraProvider theme={theme}>
//     <App />
//   </ChakraProvider>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);
