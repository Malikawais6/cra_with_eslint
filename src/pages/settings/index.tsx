import React from "react";
import { Tabs } from "antd";
import Goals from "./Goals";
import Metrics from "./Metrics";

const { TabPane } = Tabs;
const Settings = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Goals" key="1">
        <Goals />
      </TabPane>
      <TabPane tab="Metrics" key="2">
        <Metrics />
      </TabPane>
      
    </Tabs>
  );
};

export default Settings;
