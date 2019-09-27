import styled from "styled-components";
import { Props } from "./Card.type";
export const CardStyles = styled.div<Props>`
  .ant-card{
    background-color: transparent;
  }
  .ant-card-body {
    padding: 0 24px 24px 24px;
  }
  .ant-card-head {
    border-bottom: 0px;
  }
  .ant-card-extra {
    padding: 10px 0;
  }
  .ant-card-head-title {
    padding: 10px 0;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      display: flex;
      font-size: ${(props:Props)=>props.hasChart?"18px":"16px"};
      color: #56556c;
    }
    .icon {
      padding: 0 0 0 0.5em;
    }
    .threshold {
      margin-right: 1em;
      font-size: 20px;
      line-height: 1.2;
      color: #56556c;
    }
  }
  .ant-card-body {
    padding: 0 24px 0 24px;
  }
  .ant-card-bordered{
    border:none;
  }
`;
