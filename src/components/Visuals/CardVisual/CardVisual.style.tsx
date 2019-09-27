import styled from "styled-components";

export const CardVisualStyled = styled.div<any>`
  .chart-style {
    height: 160px;
    margin-left: -25px;
  }
  .chart-figures {
    justify-content: ${(props: any) => (props.showChart ? "flex-start" : "none")};
  }
  .ant-row {
    margin-top: ${(props: any) => (props.showChart ? "10px" : "0px")};
  }
  .inlineNumberWithProgress {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 20px;
  }
  .progressBar {
    align-self: flex-end;
    width: 100%;
  }
  .threshold-ratio {
    position: absolute;
    margin: -30px 0;
    font-family: Visuelt;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #56556c;
  }
`;
