import React from "react";
import { Layout, Dropdown, Menu } from "antd";
import { HeaderStyles } from "./Layout.style";
import { Wegift, PresentationIcon, CaretDownGraySmall } from "../assets";
import Icon from "../components/Icon/Icon";
const Header = (props: any) => {
  const menu = (
    <Menu>
      <Menu.Item key="logout">Logout </Menu.Item>
    </Menu>
  );
  return (
    <HeaderStyles>
      <Layout.Header>
        <div className="logo-div">
          <span className="logo">
            <Wegift />
          </span>
          <span className="kpi-dashboard">KPI DASHBOARD</span>
        </div>
        <div className="mode-div">
          <span className="presentation-icon">
            <PresentationIcon />
          </span>

          <span className="presentation-mode">Presentation Mode</span>
          <span className="dropdown">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Aron Alexander{" "}
                <Icon icon={{ component: () => <CaretDownGraySmall /> }} />
              </a>
            </Dropdown>
          </span>
        </div>
      </Layout.Header>
    </HeaderStyles>
  );
};

export default Header;
