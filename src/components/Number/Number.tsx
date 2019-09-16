import React from "react";
import { NumberStyles } from "./Number.style";
import { Props } from "./Number.type";
import Icon from "../Icon/Icon";
const Number = (props: Props) => {
  return (
    <NumberStyles {...props}>
      <h1 className="heading">
        {props.content || ""}
        {props.showIcon ? (
          <span>
            <Icon
              icon={{
                type: "info-circle",
                theme: "filled",
                style: { fontSize: "12px", color: "grey" }
              }}
            ></Icon>
          </span>
        ) : null}
        {props.showAmount ? (
          <div className="amount">{props.showAmount}</div>
        ) : null}
        {props.threshold ? (
          <span>
            {props.showTopArrow || props.showDownArrow ? (
              <Icon
                icon={{
                  type: props.showTopArrow ? "arrow-up" : "arrow-down",
                  style: {
                    color: props.showTopArrow
                      ? "green"
                      : props.showDownArrow
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
