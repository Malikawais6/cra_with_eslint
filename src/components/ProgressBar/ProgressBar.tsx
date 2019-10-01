import React from "react";
import "antd/dist/antd.css";
import { ProgressProps } from "antd/lib/progress/";

import { ProgressStyled } from "./ProgressBar.style";
import { getBarColor } from "./ProgerssBar.parser";

export const ProgressBar = (props: ProgressProps) => {
  const { percent } = props;
  return (
    <ProgressStyled
      percent={percent}
      strokeColor={percent ? getBarColor(percent) : "blue"}
      showInfo={false}
    />
  );
};
