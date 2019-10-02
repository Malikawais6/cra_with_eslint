import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import { NumberWithChartStyled } from "./Visuals.style";
import Number from "../Number/Number";
import Line from "../Line/Line";
import { LegendSeriesData } from "../Line/__mock__/mockdata";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Props } from "./Visuals.type";

export const NumberWithChart = ({ data }: Props) => {
  const {
    numberContent,
    numberThreshold,
    thresholdStatus,
    percentContent,
    percentAmount,
    progressPercentage
  } = data || {};
  return (
    <NumberWithChartStyled>
      <Row>
        <Col span={24} className="chart-figures">
          <Number
            content={numberContent}
            threshold={numberThreshold}
            thresholdStatus={thresholdStatus}
            size={"x-large"}
          />
        </Col>
      </Row>

      <Row>
        <Col className="chart-style" span={24}>
          <Line showTitle={true} seriesData={LegendSeriesData(true)}></Line>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Number
            content={percentContent}
            size={"large"}
            showAmount={percentAmount}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ProgressBar percent={progressPercentage} />
        </Col>
      </Row>
    </NumberWithChartStyled>
  );
};
