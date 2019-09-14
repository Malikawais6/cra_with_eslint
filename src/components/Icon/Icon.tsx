import React from "react";
import { Icon as IconComponent, Tooltip as TooltipComponent } from "antd";
import "antd/dist/antd.css";
import { IconStyles } from "./Icon.style";
import { Props } from "./Icon.type";
const Icon: React.SFC<Props> = (props: Props): any => {
  return (
    <IconStyles>
      {props.tooltip ? (
        <TooltipComponent {...props.tooltip}>
          <IconComponent {...props.icon}></IconComponent>
        </TooltipComponent>
      ) : (
        <IconComponent {...props.icon}></IconComponent>
      )}
    </IconStyles>
  );
};

export default Icon;
