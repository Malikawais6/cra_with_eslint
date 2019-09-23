import React from "react";
import { Layout } from "antd";
import { SidebarStyles } from "./Layout.style";
const SideBar = (props: any) => {
  return (
    <SidebarStyles>
      <Layout.Sider>Sider</Layout.Sider>
    </SidebarStyles>
  );
};

export default SideBar;
