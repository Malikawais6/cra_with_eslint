import React, { useContext } from "react";
import { GoalButtonStyle } from "./Table.style";
import { MoreGray } from "../../assets";
import Icon from "../Icon/Icon";
import { TableContext } from "../../context/";
import { Menu, Dropdown } from "antd";

export const DeletePanel = (props: any) => {
  const { onDelete } = useContext(TableContext);
  const menu = (
    <Menu onClick={() => onDelete(props)}>
      <Menu.Item>
        <GoalButtonStyle>
          <span>
            <Icon
              icon={{
                style: { color: "#a7a7bb" },
                type: "delete"
              }}
            />
          </span>
          <span style={{ paddingLeft: "5%" }}>
            Remove <strong>'Stock held'</strong>
          </span>
        </GoalButtonStyle>
      </Menu.Item>
    </Menu>
  );

  return (
    <GoalButtonStyle>
      <Dropdown overlay={menu} placement="bottomRight">
        <a>
          <Icon
            icon={{
              component: () => <MoreGray />,
              className: "icon-more"
            }}
          />
        </a>
      </Dropdown>
    </GoalButtonStyle>
  );
};
