import React from "react";
import { Switch, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard"; // aqui estou importando os component
import { Repository } from "../pages/Repository";

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
     <Route path="/repositories:repository+" component={Repository} /> {/*esse path serve para ter 2 telas no site. */}
  </Switch>
);
