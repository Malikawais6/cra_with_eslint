import styled from "styled-components";

export const CardVisualStyled = styled.div<any>`
  .chart-style {
    width: 340px;
    height: 140px;
    margin-left: -30px;
  }
  .ant-row {
    margin-top:${(props:any)=>props.showChart?"10px":"0px"}
  }
`;
