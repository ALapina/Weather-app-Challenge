import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/theme/globalStyles";

import { theme } from "./components/theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
