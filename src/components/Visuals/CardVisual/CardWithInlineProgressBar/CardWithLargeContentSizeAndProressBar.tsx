import React from "react";

import { CardVisualInlineProgressStyled } from "./CardWithInlineProgressBar.style";
import Number from "../../../Number/Number";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";
import { Props } from "../CardVisual.type";

export const CardWithLargeContentSizeAndInlineProgressBar = (props: Props) => {
  return (
    <CardVisualInlineProgressStyled>
      <div className="inlineNumberWithProgress">
        <Number
          content={props.data && props.data.numberContent}
          size={"large"}
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
    </CardVisualInlineProgressStyled>
  );
};
