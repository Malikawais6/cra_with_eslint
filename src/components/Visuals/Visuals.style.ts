import styled from "styled-components";
import { Props } from "./Visuals.type";

export const NumberWithChartStyled = styled.div`
  .chart-style {
    height: 160px;
    margin-left: -54px;
    width: calc(100% + 78px);
  }
  .chart-figures {
    justify-content: ${(props: Props) =>
      props.showChart ? "flex-start" : "none"};
  }
  .ant-row {
    margin-top: ${(props: Props) => (props.showChart ? "10px" : "0px")};
  }
  .progress-bar {
    align-self: flex-end;
    width: 100%;
    max-width: 113px;
    margin-left: 10px;
  }
`;

export const NumberWithProgressStyled = styled.div`
  .ant-row {
    margin-top: ${(props: Props) => (props.showChart ? "10px" : "0px")};
  }
  .inline-number-with-progress {
    display: flex;
    justify-content: space-between;
  }
  .progress-bar {
    align-self: flex-end;
    width: 100%;
    max-width: 113px;
    margin-left: 10px;
  }
`;
