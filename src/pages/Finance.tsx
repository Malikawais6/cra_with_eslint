import React, { useState, useMemo } from "react";
import styled from "styled-components";

import Dashboard from "./Dashboard/Dashboard";
import Settings from "./settings";
import { Route, Redirect, Switch } from "react-router";

// ------------- Page Structure ------------------------

const Finance = ({ match, history, location }: any) => {
  return (
    <Switch>
      <Route path={`${match.path}/dashboard`} component={Dashboard} />
      <Route path={`${match.path}/settings`} component={Settings} />

      <Redirect from={match.path} to={`${match.path}/dashboard`} exact />
    </Switch>
  );
};

export default Finance;
