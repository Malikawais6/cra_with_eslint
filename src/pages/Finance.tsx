import React, { useState } from "react";
import { FinanceStyles, StyledButton, EditStyledButton } from "./styles";
import {
  EditIcon,
  CalendarIcon,
  CaretDownMedium,
  CaretDownGray
} from "../assets";
import { Dropdown, Menu, Button } from "antd";
import Dashboard from "./Dashboard";
import Settings from "./settings";
import { Route, Redirect, Switch } from "react-router";
import { PeriodSelect } from "../components/PeriodSelect";

const Finance = ({ match, history, location }: any) => {
  const isSettingPage = location.pathname.includes("settings");
  const [settings, setSetting] = useState(isSettingPage);

  const options = [
    {
      value: "lastmonth",
      label: "Last Month"
    },
    {
      value: "lastweek",
      label: "Last Week"
    },
    {
      value: "lastyear",
      label: "Last Year"
    }
  ];

  return (
    <FinanceStyles settings={settings}>
      <div className="container">
        <div className="title">Finance</div>
        <div className="inner-container">
          <div className="heading">
            {settings ? "Settings" : "Dashboard"}
            {settings ? null : (
              <span className="date-time">Last updated Today, 9:45am</span>
            )}
          </div>
          <div>
            {settings ? (
              <div className="buttons">
                <Button
                  onClick={() => {
                    setSetting(false);
                    history.push(`${match.path}/dashboard`);
                  }}
                  className="settings"
                >
                  Save and back to Dashboard
                </Button>
              </div>
            ) : (
              <div className="buttons">
                <span className="content">
                  <EditIcon />
                </span>
                <EditStyledButton
                  onClick={() => {
                    setSetting(true);
                    history.push(`${match.path}/settings`);
                  }}
                >
                  <span>Edit</span>
                </EditStyledButton>
                <PeriodSelect options={options} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Switch>
        <Route path={`${match.path}/dashboard`} render={() => <Dashboard />} />
        <Route path={`${match.path}/settings`} component={Settings} />

        <Redirect from={match.path} to={`${match.path}/dashboard`} exact />
      </Switch>
    </FinanceStyles>
  );
};

export default Finance;
