import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import { CardVisualWithChartStyled } from "./CardVisualWithChart.style";
import Number from "../../../Number/Number";
import Line from "../../../Line/Line";
import { LegendSeriesData } from "../../../Line/__mock__/mockdata";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";
import { Props } from "../CardVisual.type";

export const CardVisualWithChart = (props: Props) => {
  return (
    <CardVisualWithChartStyled>
      <Row>
        <Col span={24} className="chart-figures">
          <Number
            content={props.data && props.data.numberContent}
            threshold={props.data && props.data.numberThreshold}
            thresholdStatus={props.data && props.data.thresholdStatus}
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
            content={props.data && props.data.percentContent}
            size={"large"}
            showAmount={props.data && props.data.percentAmount}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ProgressBar percent={props.data && props.data.progressPercentage} />
        </Col>
      </Row>
    </CardVisualWithChartStyled>
  );
};
