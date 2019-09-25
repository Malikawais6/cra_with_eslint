import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { SidebarStyles } from "./Layout.style";
import { DotBlueCircle } from "../assets";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [state, setState] = useState("");
  return (
    <SidebarStyles>
      <Layout.Sider>
        <div className="teams">Teams</div>
        <Menu
          mode="inline"
          style={{
            width: "202px",
            height: "44px",
            borderRadius: "8px",
            backgroundColor: "rgba(219, 219, 230, 0)",
            padding: "5%"
          }}
          onSelect={(item: any) => setState(item.key)}
        >
          <Menu.Item key="1">
          <Link to="/management">
            <span>
              <span>Management </span>{" "}
              {state === "1" ? (
                <span className="dot">
                  <DotBlueCircle />
                </span>
              ) : null}
            </span></Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/finance">
            <span>
              <span>Finance </span>
              {state === "2" ? (
                <span className="dot">
                  <DotBlueCircle />
                </span>
              ) : null}
            </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/sales">
            <span>
              {" "}
              <span>Sales </span>
              {state === "3" ? (
                <span className="dot">
                  <DotBlueCircle />
                </span>
              ) : null}
            </span>
            </Link>
           
          </Menu.Item>
          <Menu.Item key="4">
          <Link to="/customer-success">
            <span>
              {" "}
              <span>Customer Success </span>
              {state === "4" ? (
                <span className="dot">
                  <DotBlueCircle />
                </span>
              ) : null}
            </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
          <Link to="/product">
            <span>
              {" "}
              <span>Product </span>
              {state === "5" ? (
                <span className="dot">
                  <DotBlueCircle />
                </span>
              ) : null}
            </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    </SidebarStyles>
  );
};

export default SideBar;
