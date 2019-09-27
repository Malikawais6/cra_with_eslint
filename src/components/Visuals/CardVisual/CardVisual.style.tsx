import styled from "styled-components";

export const CardVisualStyled = styled.div<any>`
  .chart-style {
    width: 340px;
    height: 140px;
    margin-left: -30px;
  }
  .ant-row {
    margin-top: ${(props: any) => (props.showChart ? "10px" : "0px")};
  }
  .inlineNumberWithProgress {
    display: flex;
  }
  .progressBar {
    align-self: flex-end;
  }
  .threshold-ratio {
    position: absolute;
    margin: -55px 0;
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
