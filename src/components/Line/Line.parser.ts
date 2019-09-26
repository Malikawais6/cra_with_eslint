import { LegendItems } from "react-vis";

import { dataProps } from "./Line.type";

export function alterLegendData(
  disabled: boolean,
  title: string,
  legends: LegendItems = []
) {
  return legends.map((legend: any) => {
    if (typeof legend === "object") {
      return legend.title === title ? { ...legend, disabled } : { ...legend };
    }
    return legend;
  });
}

export const maxValue: any = (data: any[]) => {
  return data.sort((a: any, b: any) => b.y - a.y)[0].y * 0.1;
};

export function maxLabelSeriesData(dataSeriesOne: any[], dataSeriesTwo: any[]) {
  return dataSeriesOne.reduce(
    (accum: number[], el: dataProps, index: number) => {
      if (el.y > dataSeriesTwo[index].y) {
        return [...accum, el];
      }
      return [...accum, dataSeriesTwo[index]];
    },
    []
  );
}

export function minLabelSeriesData(dataSeriesOne: any[], dataSeriesTwo: any[]) {
  return dataSeriesOne.reduce(
    (accum: number[], el: dataProps, index: number) => {
      if (el.y < dataSeriesTwo[index].y) {
        return [...accum, el];
      }
      return [...accum, dataSeriesTwo[index]];
    },
    []
  );
}
