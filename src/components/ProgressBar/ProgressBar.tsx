import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { ProgressProps } from "antd/lib/progress/";
import { ProgressStyled } from "./ProgressBar.style";

export const ProgressBar = (props: ProgressProps) => {
  return (
    <ProgressStyled>
      <Progress
        percent={props.percent}
        strokeColor={props.strokeColor}
        showInfo={false}
      ></Progress>
    </ProgressStyled>
  );
};
