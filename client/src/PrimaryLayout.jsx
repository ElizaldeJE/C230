import React from "react";
import { Switch, Route } from "react-router-dom";

import Restaurants from "./pages/Home.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Restaurants} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
