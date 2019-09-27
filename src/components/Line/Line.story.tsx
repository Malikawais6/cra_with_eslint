import React from "react";
import { storiesOf } from "@storybook/react";

import Line from "./Line";
import { LegendSeriesData } from "./__mock__/mockdata";
import { LineChartStory } from "./Line.style";

storiesOf("Line", module).add("Line Chart with Props", () => (
  <LineChartStory>
    <Line
      showXAxis={true}
      showYAxis={true}
      showLegends={true}
      showLabels={true}
      showGridLines={true}
      showLineMarks={true}
      seriesData={LegendSeriesData(false)}
    ></Line>
  </LineChartStory>
));
storiesOf("Line", module).add(
  "Line Chart without Props",
  () => (
    <LineChartStory>
      <Line showTitle={true} seriesData={LegendSeriesData(true)}></Line>
    </LineChartStory>
  ),
  {
    info: { inline: true }
  }
);
