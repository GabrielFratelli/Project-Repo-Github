import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard"; // aqui estou importando os component
import { Repository } from "../pages/Repository";

export const Navigation: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repositories" element={<Repository />}>
      <Route path=":repository+" element={<Repository />} />
      {/*esse path serve para ter 2 telas no site. */}
    </Route>
  </Routes>
);
