import React from "react";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import Sidebar from "./Layout/Sidebar";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Finance from "./pages/Finance";
import { AppContextProvider } from "./AppContextProvider";
const App = () => {
  // const actions=(

  // )
  return (
    <AppContextProvider>
      <Router>
      <Switch>
        <Layout>
          <Header />
          <Layout>
            <Sidebar />
            <Content>
              
                <Route
                  path="/finance"
                  component={Finance}
                />
                {/* <Route
                  exact
                  path="/finance/settings"
                 
                  render={() => <Finance settings={true} />}
                /> */}
                {/* <Route exact path="/">
              <Redirect to="/finance/dashboard" />
            </Route> */}
             
            </Content>
          </Layout>
        </Layout>
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
