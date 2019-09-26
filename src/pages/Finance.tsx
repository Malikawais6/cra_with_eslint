import React, { useState } from "react";
import { FinanceStyles } from "./styles";
import { EditIcon, CalendarIcon, CaretDownMedium } from "../assets";
import { Dropdown, Menu, Button } from "antd";
import Dashboard from "./Dashboard";
import Settings from "./settings";
import { Route, Redirect, Switch } from "react-router";

const Finance = ({ match, history,location }: any) => {
  const isSettingPage=location.pathname.includes('settings')
  const [settings, setSetting] = useState(isSettingPage);
  const menu = (
    <Menu>
      <Menu.Item key="week">Last Week </Menu.Item>
    </Menu>
  );
  return (
    <FinanceStyles settings={settings}>
      <div className="container">
        <div className="title">Finance</div>
        <div className="inner-container">
          <div className="item">
            <div className="heading">
              {settings ? "Settings" : "Dashboard"}
              {settings ? null : (
                <span className="date-time">Last updated Today, 9:45am</span>
              )}
            </div>
          </div>
          <div className="item">
            {settings ? (
              <div className="buttons">
                <Button onClick={() => {
                   setSetting(false);
                   history.push(`${match.path}/dashboard`);
                }} className="settings">
                  Save and back to Dashboard
                </Button>
              </div>
            ) : (
              <div className="buttons">
                <span className="content">
                  <EditIcon />
                </span>
                <span
                  className="edit"
                  onClick={() => {
                    setSetting(true);
                    history.push(`${match.path}/settings`);
                  }}
                >
                  Edit
                </span>
                <span>
                  <Dropdown overlay={menu}>
                    <Button className="dropdown">
                      <span className="calendar-icon">
                        <CalendarIcon />
                      </span>{" "}
                      <span className="dropdown-text">Last Month</span>{" "}
                      <span className="icon-down">
                        <CaretDownMedium />
                      </span>
                    </Button>
                  </Dropdown>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
        <Switch>
          <Route
            path={`${match.path}/dashboard`}
            render={() => <Dashboard />}
          />
          <Route path={`${match.path}/settings`} component={Settings} />

          <Redirect from={match.path} to={`${match.path}/dashboard`} exact />
        </Switch>
    </FinanceStyles>
  );
};

export default Finance;
