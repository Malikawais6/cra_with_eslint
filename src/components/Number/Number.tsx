import React from "react";
import { NumberStyles } from "./Number.style";
import { Props } from "./Number.type";
import Icon from "../Icon/Icon";
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
            {props.thresholdStatus || props.thresholdStatus===0 ? (
              <Icon
                icon={{
                  type:
                    props.thresholdStatus === "top" ||
                    props.thresholdStatus === "normal"
                      ? "arrow-up"
                      : "arrow-down",
                  style: {
                    color:
                      props.thresholdStatus === "top"
                        ? "green"
                        : props.thresholdStatus === "down"
                        ? "red"
                        : "grey",
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
