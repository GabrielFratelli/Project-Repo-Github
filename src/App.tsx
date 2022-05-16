import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navigation } from "./routes";
import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => (
  <>
  <BrowserRouter>
    <Navigation />
    <GlobalStyle />
  </BrowserRouter>
  </>
);
