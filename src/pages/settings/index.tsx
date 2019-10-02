import React, { useMemo } from "react";
import { Tabs } from "antd";

import Goals from "./Goals";
import Metrics from "./Metrics";
import { PageStructure } from "../PageStructure/PageStructure";
import { extractModuleNameFromPath } from "../util";

import { BackToDashboardLinkStyle } from "./styles";

const { TabPane } = Tabs;

const Settings = (props: any) => {
  const { match } = props;
  const ModuleName = extractModuleNameFromPath(match.path);

  const BackToDashboard = useMemo(() => {
    return () => (
      <BackToDashboardLinkStyle to={`/${ModuleName}/dashboard`}>
        Back to dashbaord
      </BackToDashboardLinkStyle>
    );
  }, [ModuleName]);

  return (
    <PageStructure
      moduleTitle={ModuleName}
      pageTitle="Settings"
      Extras={BackToDashboard}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Goals" key="1">
          <Goals />
        </TabPane>
        <TabPane tab="Metrics" key="2">
          <Metrics />
        </TabPane>
      </Tabs>
    </PageStructure>
  );
};

export default Settings;
