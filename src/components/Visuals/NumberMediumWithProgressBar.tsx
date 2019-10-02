import React from "react";

import { NumberWithProgressStyled } from "./NumberWithProgressBar.style";
import Number from "../Number/Number";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Props } from "./Visuals.type";

export const NumberMediumWithProgressBar = (props: Props) => {
  return (
    <NumberWithProgressStyled>
      <div className="inlineNumberWithProgress">
        <Number
          content={props.data && props.data.numberContent}
          size={"medium"}
          threshold={props.data && props.data.numberThreshold}
          thresholdStatus={props.data && props.data.thresholdStatus}
        />

        <div className="progressBar">
          <span className="threshold-ratio">
            {props.data && props.data.percentContent}
          </span>
          <span>
            <ProgressBar
              percent={props.data && props.data.progressPercentage}
            />
          </span>
        </div>
      </div>
    </NumberWithProgressStyled>
  );
};
