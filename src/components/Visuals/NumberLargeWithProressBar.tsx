import React from "react";

import { NumberWithProgressStyled } from "./Visuals.style";
import Number from "../Number/Number";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Props } from "./Visuals.type";

export const NumberLargeWithProgressBar = ({ data }: Props) => {
  const {
    numberContent,
    numberThreshold,
    thresholdStatus,
    percentContent,
    progressPercentage
  } = data || {};
  return (
    <NumberWithProgressStyled>
      <div className="inline-number-with-progress">
        <Number
          content={numberContent}
          size={"large"}
          threshold={numberThreshold}
          thresholdStatus={thresholdStatus}
        />

        <div className="progress-bar">
          <span className="progress-ratio">{percentContent}</span>
          <span>
            <ProgressBar percent={progressPercentage} />
          </span>
        </div>
      </div>
    </NumberWithProgressStyled>
  );
};
