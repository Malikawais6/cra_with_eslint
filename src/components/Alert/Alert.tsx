import React from "react";
import { Alert as AntdAlert } from "antd";
import "antd/dist/antd.css";
import { AlertProps } from "antd/lib/alert/";
import { AlertStyled } from "./Alert.style";

export const Alert = (props: AlertProps) => {
  return (
    <AlertStyled>
      <AntdAlert {...props} />
    </AlertStyled>
  );
};
