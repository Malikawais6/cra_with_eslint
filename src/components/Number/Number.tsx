import React from "react";
import { NumberStyles } from "./Number.style";
import { Props } from "./Number.type";
import Icon from "../Icon/Icon";
import {ArrowUp,ArrowDown} from "../../assets/"
const Number = (props: Props) => {
  return (
    <NumberStyles {...props}>
      <h1 className="heading">
        {props.content || ""}

        {props.showAmount ? (
          <div className="amount">{props.showAmount}</div>
        ) : null}
        {props.threshold ? (
          <span>
            {props.thresholdStatus || props.thresholdStatus===0
             ? (
              <Icon
                icon={{
                  component:()=>
                    props.thresholdStatus === "top" ?<ArrowUp />:
                    props.thresholdStatus === "normal"
                      ? <ArrowUp isGrey={true} />
                      : <ArrowDown />,
                  style: {
                   fontSize: "12px"
                  }
                }}
              />
            ) : null}
            {props.threshold}%
          </span>
        ) : null}
      </h1>
    </NumberStyles>
  );
};

export default Number;
