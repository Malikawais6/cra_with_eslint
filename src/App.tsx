import React from "react";
import Icon from "./components/Icon/Icon";
import Card from "./components/Card/Card";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
const App = () => {
  return (
    <Card
      title="Default size card"
      extra={
        <Icon
          icon={{ type: "star" }}
          tooltip={{
            title: () => <span>prompt text</span>
          }}
        />
      }
      width="30vw"
      height="50vh"
    >
      <XYPlot width={300} height={100}>
        <HorizontalGridLines />
        <LineSeries
          color="red"
          data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
        />
        <XAxis title="X" />
        <YAxis />
      </XYPlot>
    </Card>
  );
};

export default App;
