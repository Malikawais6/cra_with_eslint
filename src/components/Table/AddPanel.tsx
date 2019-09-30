import React, { useContext, useState, Fragment } from "react";
import { Button } from "antd";
import { Select } from "antd";

import { GoalButtonStyle } from "./Table.style";
import { AddIconBlue } from "../../assets";
import Icon from "../Icon/Icon";
import { Alert } from "../Alert/Alert";
import { TableContext } from "../../context/";

const { Option } = Select;

export const AddPanel = (props: any) => {
  const { onAdd } = useContext(TableContext);
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState("");
  const handleChange = (value: any) => {
    setSelected(value);
  };

  const alertContent = (
    <span className="panel">
      <Select
        defaultValue={selected}
        className="dropdown"
        onChange={handleChange}
      >
        <Option value="" disabled>
          Select Item
        </Option>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Button
        className="addButton"
        onClick={() => {
          onAdd(selected);
          setState(false);
        }}
        disabled={selected ? false : true}
      >
        {props.buttonTitle || "Add"}
      </Button>
    </span>
  );
  return (
    <Fragment>
      <GoalButtonStyle onClick={() => setState(!state)}>
        <Icon
          icon={{
            component: () => <AddIconBlue />
          }}
        />
        <span className="text">{props.buttonTitle || "Add"}</span>
      </GoalButtonStyle>
      {state ? <Alert message={alertContent} className="alertBox" /> : null}
    </Fragment>
  );
};
