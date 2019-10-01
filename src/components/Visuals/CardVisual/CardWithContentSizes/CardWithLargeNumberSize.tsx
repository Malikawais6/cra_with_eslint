import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import Number from "../../../Number/Number";
import { Props } from "../CardVisual.type";

export const CardWithLargeNumberSize = (props: Props) => {
  return (
    <Row>
      <Col span={24}>
        <Number
          content={props.data && props.data.numberContent}
          threshold={props.data && props.data.numberThreshold}
          thresholdStatus={props.data && props.data.thresholdStatus}
          size={"large"}
        />
      </Col>
    </Row>
  );
};
