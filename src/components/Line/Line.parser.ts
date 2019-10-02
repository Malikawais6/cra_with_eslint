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
  return data.sort((a: any, b: any) => b.y - a.y)[0].y * 0.15;
};

export function maxLabelSeriesData(seriesOne: any[], seriesTwo: any[]) {
  return seriesOne.reduce((accum: number[], el: dataProps, index: number) => {
    if (el.y > seriesTwo[index].y) {
      return [...accum, el];
    }
    return [...accum, seriesTwo[index]];
  }, []);
}

export function minLabelSeriesData(seriesOne: any[], seriesTwo: any[]) {
  return seriesOne.reduce((accum: number[], el: dataProps, index: number) => {
    if (el.y < seriesTwo[index].y) {
      return [...accum, el];
    }
    return [...accum, seriesTwo[index]];
  }, []);
}
