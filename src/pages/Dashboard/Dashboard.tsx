import React, { useMemo } from "react";
import { Menu } from "antd";

import { PageStructure } from "../PageStructure/PageStructure";
import { EditIcon } from "../../assets";
import { Layout } from "../../components/Layout/Layout";
import { PeriodSelect } from "../../components/PeriodSelect";
import { DashboardContextProvider } from "./DashboardContextProvider";
import { extractModuleNameFromPath, extractModuleUrlFromPath } from "../util";

import { EditDashboardLinkStyle, DashboardActionsStyle } from "./styles";

const DashboardActions = ({ match, history }: any) => {
  const { path } = match;
  const moduleUrl = extractModuleUrlFromPath(path);

  // @Node: Period should be updated in future
  const periodOptions = [
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
    <DashboardActionsStyle>
      <EditDashboardLinkStyle to={`/${moduleUrl}/settings`}>
        <EditIcon />
        <span>Edit</span>
      </EditDashboardLinkStyle>

      <PeriodSelect options={periodOptions} />
    </DashboardActionsStyle>
  );
};

const Dashboard = (props: any) => {
  const { match, history, location } = props;
  const moduleName = extractModuleNameFromPath(match.path);

  // @Noted TimeTracker component should implemented with dynamic logic of Time
  const TimeTracker = useMemo(() => {
    return () => <span className="date-time">Last updated Today, 9:45am</span>;
  }, []);

  // Extras: Page extras in case of dashboard is
  const Extras = useMemo(() => {
    return () => (
      <DashboardActions match={match} history={history} location={location} />
    );
  }, [match, history, location]);

  return (
    <DashboardContextProvider>
      <PageStructure
        moduleTitle={moduleName}
        pageTitle="Dashboard"
        TimeTracker={TimeTracker}
        Extras={Extras}
      >
        <Layout />
      </PageStructure>
    </DashboardContextProvider>
  );
};

export default Dashboard;
