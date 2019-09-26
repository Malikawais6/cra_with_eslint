import styled from "styled-components";
import { Props } from "./Line.type";

export const LineStyles = styled.div<Props>`
  .rv-xy-plot__grid-lines__line {
    stroke: #e6e6e9;
    stroke-dasharray: ${props =>{
      return props.HorizontalGridLines && props.HorizontalGridLines === "dashed"
        ? "2px"
        : "0px";}
  }`;
