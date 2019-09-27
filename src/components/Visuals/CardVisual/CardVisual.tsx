import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import { CardVisualStyled } from "./CardVisual.style";
import Number from "../../Number/Number";
import Line from "../../Line/Line";
import { LegendSeriesData } from "../../Line/__mock__/mockdata";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { Props } from "./CardVisual.type";

export const CardVisual = (props: Props) => {
  const {
    showInlineProgressBar,
    numberSize,
    percentSize,
    numberThresholdStatus,
    showChart,
    showProgressBar
  } = props;

  return (
    <CardVisualStyled showChart={showChart}>
      {showInlineProgressBar ? (
        <Row className="inlineNumberWithProgress">
          <Col span={14}>
            <Number
              content={props.data && props.data.numberContent}
              size={numberSize}
              threshold={props.data && props.data.numberThreshold}
              thresholdStatus={numberThresholdStatus}
            />
          </Col>
          <Col span={8} className="progressBar">
            <span className="threshold-ratio">
              {" "}
              {props.data && props.data.percentContent}
            </span>
            <span>
              <ProgressBar
                percent={props.data && props.data.progressPercentage}
              />
            </span>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={24} className = "chart-figures">
            <Number
              content={props.data && props.data.numberContent}
              threshold={props.data && props.data.numberThreshold}
              thresholdStatus={numberThresholdStatus}
              size={numberSize}
            />
          </Col>
        </Row>
      )}
      {showChart && (
        <Row>
          <Col className="chart-style" span={24}>
            <Line showTitle={true} seriesData={LegendSeriesData}></Line>
          </Col>
        </Row>
      )}
      {showProgressBar && (
        <Row>
          <Col span={24}>
            <Number
              content={props.data && props.data.percentContent}
              size={percentSize}
              showAmount={props.data && props.data.percentAmount}
            />
          </Col>
        </Row>
      )}
      {showProgressBar && (
        <Row>
          <Col span={24}>
            <ProgressBar
              percent={props.data && props.data.progressPercentage}
            />
          </Col>
        </Row>
      )}
    </CardVisualStyled>
  );
};
