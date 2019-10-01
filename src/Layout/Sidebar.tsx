import React, { useState, Fragment } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { SidebarStyles, StyledMenu } from "./Layout.style";
import { DotBlueCircle } from "../assets";
const MenuItem = (props: any) => (
  <Link to={props.path}>
    <Fragment>
      <span>{props.title} </span>{" "}
      {props.state === props.value ? (
        <span className="dot">
          <DotBlueCircle />
        </span>
      ) : null}
    </Fragment>
  </Link>
);
const SideBar = () => {
  const [state, setState] = useState("");

  return (
    <SidebarStyles>
      <div className="teams">Teams</div>
      <StyledMenu mode="inline" onSelect={(item: any) => setState(item.key)}>
        <Menu.Item key="1">
          <MenuItem
            title="Management"
            path="/management"
            state={state}
            value="1"
          />
        </Menu.Item>
        <Menu.Item key="2">
          <MenuItem title="Finance" path="/finance" state={state} value="2" />
        </Menu.Item>
        <Menu.Item key="3">
          <MenuItem title="Sales" path="/sales" state={state} value="3" />
        </Menu.Item>
        <Menu.Item key="4">
          <MenuItem
            title="Customer Success"
            path="/customer-success"
            state={state}
            value="4"
          />
        </Menu.Item>
        <Menu.Item key="5">
          <MenuItem title="Product" path="/product" state={state} value="5" />
        </Menu.Item>
      </StyledMenu>
    </SidebarStyles>
  );
};

export default SideBar;
