import styled from "styled-components";
import { Dropdown, Button, Menu,Layout } from "antd";
export const HeaderStyles = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    align-items: center;
    padding: 1em;
  }

  .left-container {
    display: flex;
    align-items: center;
  }

  .kpi-dashboard {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.88px;
    color: #dbdbe6;
    padding-left: 1em;
  }

  .right-container {
    display: flex;
    align-items: center;
  }
  .presentation-icon {
    display: flex;
  }
`;
export const StyledDropdown = styled(Dropdown)`
  &.ant-dropdown-link {
    font-size: 16px;
    color: #56556c;
    margin: 0 2em 0 2em;
    display: flex;
  }
`;
export const StyledButton = styled(Button)`
  &.ant-btn {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #56556c;
    border: none;
    box-shadow: none;
    padding-left: 5px;
  }
`;
export const StyledMenu = styled(Menu)`
  &.ant-menu {
    width: 202px;
    height: 44px;
    border-radius: 8px;
    background-color: rgba(219, 219, 230, 0);
    padding: 5%;
  }
`;
export const SidebarStyles = styled(Layout.Sider)`
  & {
    background-color: #242338;
  }
  .ant-layout-sider-children {
    height: 100vh;
    background-color: #242338;
  }
  .ant-menu-item {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;
    border-radius: 4px;
  }
  .ant-menu {
    &:not(.ant-menu-horizontal) {
      .ant-menu-item-selected {
        color: #00d4ea;
        background-color: #1d1b32;
        font-weight: bold;
      }
      .ant-menu-item-active {
        font-weight: bold;
        color: #00d4ea;
        background-color: #1d1b32;
      }
      .ant-menu-item::after {
        border-right: none;
      }
    }
  }
  .teams {
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    margin: 3em 0 0 2.7em;
  }
  .dot {
    float: right;
  }
  .ant-menu-item {
    a {
      color: inherit;
    }
    a:hover {
      color: inherit;
    }
  }
`;