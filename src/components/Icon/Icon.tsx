import React from "react";
import { Icon as IconAntd, Tooltip as TooltipAntd } from "antd";
import "antd/dist/antd.css";
import { IconStyles } from "./Icon.style";
import { Props } from "./Icon.type";
const Icon = (props: Props) => {
  return (
    <IconStyles>
      {props.tooltip ? (
        <TooltipAntd {...props.tooltip}>
          <IconAntd {...props.icon}></IconAntd>
        </TooltipAntd>
      ) : (
        <IconAntd {...props.icon}></IconAntd>
      )}
    </IconStyles>
  );
};

export default Icon;
