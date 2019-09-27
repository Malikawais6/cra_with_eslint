import styled from "styled-components";

export const CardVisualStyled = styled.div<any>`
  .chart-style {
    width: 100%;
    height: 150px;
    margin-left: -25px;
  }
  .ant-row {
    margin-top: ${(props: any) => (props.showChart ? "10px" : "0px")};
  }
`;
