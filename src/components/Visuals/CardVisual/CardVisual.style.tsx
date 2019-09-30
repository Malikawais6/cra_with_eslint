import styled from "styled-components";

export const CardVisualStyled = styled.div<any>`
  .chart-style {
    height: 160px;
    margin-left: -54px;
    width: calc(100% + 78px);
  }
  .chart-figures {
    justify-content: ${(props: any) =>
      props.showChart ? "flex-start" : "none"};
  }
  .ant-row {
    margin-top: ${(props: any) => (props.showChart ? "10px" : "0px")};
  }
  .inlineNumberWithProgress {
    display: flex;
    justify-content: space-between;
  }
  .progressBar {
    align-self: flex-end;
    width: 100%;
    max-width: 113px;
    margin-left: 10px;
  }
`;
