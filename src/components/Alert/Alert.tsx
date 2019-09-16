import React from "react";
import { Alert, Icon } from "antd";
import "antd/dist/antd.css";
import { AlertProps } from "antd/lib/alert/";

import { AlertStyled } from "./Alert.style";

export const AlertComponent = (props: AlertProps) => {
  const icon = <Icon style={{ color: "#a7a7bb" }} type="delete" />;
  return (
    <AlertStyled>
      <Alert icon={icon} message={props.message} type="info" showIcon />
    </AlertStyled>
  );
};
