import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import Number from "../Number/Number";
import { Props } from "./Visuals.type";

export const NumberLarge = ({ data }: Props) => {
  const { numberContent, numberThreshold, thresholdStatus } = data || {};
  return (
    <Row>
      <Col span={24}>
        <Number
          content={numberContent}
          threshold={numberThreshold}
          thresholdStatus={thresholdStatus}
          size={"large"}
        />
      </Col>
    </Row>
  );
};
