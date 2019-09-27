import styled from "styled-components";
import { Dropdown, Button, Menu } from "antd";
export const HeaderStyles = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    align-items: center;
    padding: 15px 32px;
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

  .nav-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    align-items: center;
  }

  .presentation-mode {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 12px;
    }
  }
`;
export const StyledDropdown = styled(Dropdown)`
  &.ant-dropdown-link {
    font-size: 16px;
    color: #56556c;
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
    padding: 0;
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
export const SidebarStyles = styled.aside`
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