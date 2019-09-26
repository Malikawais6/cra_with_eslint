import { LineMarkSeriesProps } from "react-vis";
export type Props = LineMarkSeriesProps & {
  HorizontalGridLines?: "dashed" | "fill";
  curve?: boolean;
  dashed?: boolean;
  size?: number;
  seriesData?: any;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showLegends?: boolean;
  showLabels?: boolean;
  showGridLines?: boolean;
  showLineMarks?: boolean;
};

export type dataProps = { [key: string]: string | number };
