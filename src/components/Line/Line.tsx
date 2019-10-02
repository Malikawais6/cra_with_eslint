import React from "react";
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LabelSeries,
  LineSeries,
  LineMarkSeries,
  LegendItem,
  GradientDefs
} from "react-vis";
import { clone } from "rambda";
import "../../../node_modules/react-vis/dist/style.css";

import { LineStyles, ThresholdStyled } from "./Line.style";
import { Props } from "./Line.type";
import { dataSeriesOne, dataSeriesTwo } from "./__mock__/mockdata";
import { Legends } from "./Legends";
import {
  alterLegendData,
  maxLabelSeriesData,
  maxValue,
  minLabelSeriesData
} from "./Line.parser";
import Number from "../Number/Number";

const Threshold = () => (
  <foreignObject width={100} height={100}>
    <ThresholdStyled>
      <Number threshold={20} thresholdStatus="top" />
    </ThresholdStyled>
  </foreignObject>
);

const maxSeriesResult = maxLabelSeriesData(
  [...dataSeriesOne],
  [...dataSeriesTwo]
);
const minSeriesResult = minLabelSeriesData(
  [...dataSeriesOne],
  [...dataSeriesTwo]
);
const maxLabelSeriesResult = clone(maxSeriesResult);
const maxVal = maxValue([...maxLabelSeriesResult]);

const finalMaxLabelSeriesData = maxLabelSeriesResult.map(
  (obj: any, index: number) => {
    return {
      ...obj,
      y: obj.y + maxVal,
      label: `(£${maxSeriesResult[index].y})`
    };
  }
);
const finalMinLabelSeriesData = maxLabelSeriesResult.map(
  (obj: any, index: number) => {
    return {
      ...obj,
      y: obj.y + 2.5,
      label: `£${minSeriesResult[index].y}`
    };
  }
);

const Line = (props: Props) => {
  const [legendsData, setLegendData] = React.useState([...props.seriesData]);
  const LineSeriesType: any = props.showLineMarks ? LineMarkSeries : LineSeries;

  const onLegendClick = React.useCallback(
    (legend: LegendItem) => {
      const updatedLegends = alterLegendData(
        !legend.disabled,
        legend.title,
        legendsData
      );
      const disabledLegends = updatedLegends.filter(
        (l: LegendItem) => l.disabled
      );
      const disabledLength = disabledLegends.length;
      if (disabledLength !== legendsData.length) {
        setLegendData(updatedLegends);
      }
    },
    [legendsData]
  );
  const {
    showLegends,
    showGridLines,
    curve,
    showLabels,
    showXAxis,
    showYAxis,
    showTitle
  } = props;

  return (
    <LineStyles HorizontalGridLines="dashed">
      {showLegends && (
        <Legends
          legends={legendsData}
          onLegendClick={onLegendClick}
          colors={["#40d1e7", "#a7a7bb"]}
        />
      )}
      <FlexibleXYPlot xType="ordinal" style={{ padding: 0, margin: 0 }}>
        {showGridLines && <HorizontalGridLines />}

        <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#40D1E7" />
            <stop offset="100%" stopColor="#74A4EA" />
          </linearGradient>
        </GradientDefs>

        {legendsData.map((legend: any, index: number) => {
          return (
            !legend.disabled && (
              <LineSeriesType
                color={legend.color}
                data={legend.data}
                style={legend.style}
                curve={curve ? "curveMonotoneX" : ""}
                _sizeValue={2}
              />
            )
          );
        })}

        {showLabels && (
          <LabelSeries data={finalMaxLabelSeriesData} labelAnchorX={"middle"} />
        )}
        {showLabels && (
          <LabelSeries data={finalMinLabelSeriesData} labelAnchorX={"middle"} />
        )}

        {showXAxis && <XAxis tickSize={0} />}
        {showTitle && (
          <YAxis hideLine hideTicks tickSize={0} title={"12 month"} />
        )}
        {showYAxis && <YAxis hideLine tickSize={0} />}
        {showXAxis && (
          <XAxis
            tickFormat={() => <Threshold />}
            hideLine
            tickSize={0}
            top={335}
            left={15}
          />
        )}
      </FlexibleXYPlot>
    </LineStyles>
  );
};

export default Line;
