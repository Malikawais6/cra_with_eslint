import React from "react";
import { LineStyles } from "./Line.style";
import { Props } from "./Line.type";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import "../../../node_modules/react-vis/dist/style.css";
const Line = (props: Props) => {
  return (
    <LineStyles {...props}>
      <XYPlot width={300} height={100}>
        {props.HorizontalGridLines ? <HorizontalGridLines /> : null}
        <LineSeries
          color="red"
          data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
          curve={props.curve?'curveMonotoneX':""}
          style={{
            strokeDasharray:props.dashed? '2 2':""
          }}
        />
        <XAxis title="X" />
        <YAxis />
      </XYPlot>
    </LineStyles>
  );
};

export default Line;
