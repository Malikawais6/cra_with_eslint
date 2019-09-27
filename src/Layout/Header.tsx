import React from "react";
import { Menu } from "antd";
import { HeaderStyles, StyledDropdown, StyledButton } from "./Layout.style";
import { Wegift, PresentationIcon, CaretDownGraySmall } from "../assets";
import Icon from "../components/Icon/Icon";
const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item key="logout">Logout </Menu.Item>
    </Menu>
  );
  return (
    <HeaderStyles>
      <div className="container">
        <div className="left-container">
          <Wegift />
          
          <div className="kpi-dashboard">KPI DASHBOARD</div>
        </div>
        <div className="nav-items">
          <div className="presentation-mode">
            <PresentationIcon />
            <StyledButton>Presentation Mode</StyledButton>
          </div>


          <StyledDropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Aron Alexander
              <Icon icon={{ component: () => <CaretDownGraySmall /> }} />
            </a>
          </StyledDropdown>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
