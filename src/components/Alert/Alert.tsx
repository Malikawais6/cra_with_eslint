import React from "react";
import "antd/dist/antd.css";

import { AlertProps } from "antd/lib/alert/";
import { AlertStyled } from "./Alert.style";

export const Alert = (props: AlertProps) => {
  return <AlertStyled {...props} />;
};
