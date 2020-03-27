import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import Global from "./styles/Global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Routes from "./routes";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, 500, 700]
          }
        ]}
        display="swap"
      />
      <Global />
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
