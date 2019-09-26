import styled from "styled-components";
import { Props } from "./Line.type";
export const LineStyles = styled.div<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .rv-xy-plot__grid-lines__line {
    stroke: #e6e6e9;
    stroke-dasharray: ${props => {
      return props.HorizontalGridLines && props.HorizontalGridLines === "dashed"
        ? "2px"
        : "0px";
    }};
  }
`;

export const ThresholdStyled = styled.div`
  margin-top: 10px;
`;

export const LineChartStory = styled.div`
  width: 500px;
  height: 300px;
`;
