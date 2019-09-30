import React, { Fragment } from "react";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import Sidebar from "./Layout/Sidebar";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Finance from "./pages/Finance";
import Sales from "./pages/Sales";
import { AppContextProvider } from "./AppContextProvider";

import { AppStyles, AppMainStyle } from "./App.style";
const App = () => {
  // )
  return (
    <Fragment>
      <AppStyles />
      <AppContextProvider>
        <Router>
          <Switch>
            <AppMainStyle>
              <Header />
              <Layout>
                <Sidebar />
                <Content>
                  <Route path="/finance" component={Finance} />
                  <Route path="/Sales" component={Sales} />
                </Content>
              </Layout>
            </AppMainStyle>
          </Switch>
        </Router>
      </AppContextProvider>
    </Fragment>
  );
};

export default App;
