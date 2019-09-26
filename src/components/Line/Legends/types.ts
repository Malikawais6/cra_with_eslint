import { LegendItems, LegendItem } from "react-vis";

export interface LegendsProps {
  legends?: LegendItems;
  colors?: string[];
  onLegendClick?: (legend: LegendItem) => void;
}

export interface LegendItemStyledProps {
  color?: string;
  legendSize?: string;
}
