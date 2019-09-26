import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { ProgressProps } from "antd/lib/progress/";
import { ProgressStyled } from "./ProgressBar.style";

export const ProgressBar = (props: ProgressProps) => {
  return (
    <ProgressStyled
      percent={props.percent}
      strokeColor={props.percent == 100 ? "#00c972" : props.strokeColor}
      showInfo={false}
    />
  );
};
