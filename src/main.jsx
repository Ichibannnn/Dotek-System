import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.jsx";
import "./style/index.css";
import { myTheme } from "./theme/theme.js";
import { ThemeProvider } from "@mui/material";

// const theme = createTheme({
//   colors: {
//     primary: "#ab47bc",
//     bg: "#FFFFFF",
//   },
//   typography: {
//     fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//     fontSize: 12,
//     h1: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 40,
//     },
//     h2: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 32,
//     },
//     h3: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 24,
//     },
//     h4: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 20,
//     },
//     h5: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 16,
//     },
//     h6: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 14,
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
