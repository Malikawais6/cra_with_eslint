import styled from "styled-components";
import {Props} from "./../CardVisual.type"

export const CardVisualWithChartStyled = styled.div`
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
  .progressBar {
    align-self: flex-end;
    width: 100%;
    max-width: 113px;
    margin-left: 10px;
  }
`;
