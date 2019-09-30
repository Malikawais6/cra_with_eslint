import styled from "styled-components";

import { Props } from "./Line.type";

export const LineStyles = styled.div<Props>`
  padding: 20px 0 20px;
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

  .rv-xy-plot__axis__title text {
    font-size: 12px;
    fill: #a7a7bb;
  }
  .rv-xy-plot__axis__title > g {
    transform: rotate(360deg);
    transform: translate(70px, 20px);
  }
  /* .rv-xy-plot__series {
    .rv-xy-plot__series--label {
      transform: translate(10px, -36px);
    }
  } */
`;

export const ThresholdStyled = styled.div`
  margin-top: 10px;
`;

export const LineChartStory = styled.div`
  width: 500px;
  height: 300px;
`;
