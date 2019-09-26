import * as React from "react";

import { LegendsStyled, LegendItemStyled } from "./legends.style";
import { LegendsProps } from "./types";

export function Legends(props: LegendsProps) {
  const { legends = [], colors = [], onLegendClick } = props;
  const defaultColors = ["#008000", "#A9A9A9"];
  return (
    <LegendsStyled>
      {legends.map((legend: any, index: number) => {
        const color = colors[index] ? colors[index] : defaultColors[index];
        return (
          <LegendItemStyled
            key={index.toString()}
            color={color}
            onClick={() => {
              if (onLegendClick) {
                onLegendClick(legend);
              }
            }}
          >
            <span>&#x25A0;</span>
            {legend.title}
          </LegendItemStyled>
        );
      })}
    </LegendsStyled>
  );
}
