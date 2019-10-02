import React, { useMemo } from "react";

import { PageStructure } from "../PageStructure/PageStructure";
import { EditIcon } from "../../assets";
import { GridLayout as Layout } from "../../components/GridLayout/GridLayout";
import { PeriodSelect } from "../../components/PeriodSelect";
import {
  DashboardContextProvider
} from "./context/DashboardContextProvider";
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

  /**
   * @Note: we are using Dashboard component for multiple modules [Sales, Finance etc]
   * so get the module name we just extract the name from router path. i.e /finance/dashboard
   * the module name in that case will be "Finance"
   */
  const moduleName = extractModuleNameFromPath(match.path);

  // @Noted TimeTracker component should be implemented with dynamic logic of Time
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
        headerBorderBottom
        TimeTracker={TimeTracker}
        Extras={Extras}
      >
        <Layout />
      </PageStructure>
    </DashboardContextProvider>
  );
};

export default Dashboard;
