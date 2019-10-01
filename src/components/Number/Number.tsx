import React from "react";

import { NumberStyles } from "./Number.style";
import { Props } from "./Number.type";
import Icon from "../Icon/Icon";
import { ArrowUp, ArrowDown } from "../../assets/";

const Number = (props: Props) => {
  return (
    <NumberStyles {...props}>
      <div className="numbers-container">
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
                      )
                  }}
                />
              ) : null}
            </span>
            <span className="ratio"> {props.threshold}%</span>
          </div>
        ) : null}
        {props.showAmount ? (
          <div className="amount">{props.showAmount}</div>
        ) : null}
      </div>
    </NumberStyles>
  );
};

export default Number;
