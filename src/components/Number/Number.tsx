import React from "react";
import { NumberStyles } from "./Number.style";
import { Props } from "./Number.type";
import Icon from "../Icon/Icon";
import { ArrowUp, ArrowDown } from "../../assets/";
const Number = (props: Props) => {
  return (
    <NumberStyles {...props}>
      <div className="container">
        <div className="content">
          <span className="heading">{props.content || ""} </span>

          {props.threshold ? (
            <div className="threshold">
              <span>
                {props.thresholdStatus || props.thresholdStatus === 0 ? (
                  <Icon
                    icon={{
                      component: () =>
                        props.thresholdStatus === "top" ? (
                          <ArrowUp />
                        ) : props.thresholdStatus === "normal" ? (
                          <ArrowUp isGrey={true} />
                        ) : (
                          <ArrowDown />
                        ),
                      style: {
                        fontSize: "12px"
                      }
                    }}
                  />
                ) : null}
              </span>
              <span className="ratio"> {props.threshold}%</span>
            </div>
          ) : null}
        </div>
        {props.showAmount ? (
          <div className="amount">{props.showAmount}</div>
        ) : null}
      </div>
    </NumberStyles>
  );
};

export default Number;
