import styled from "styled-components";
import { Props } from "./Card.type";
export const CardStyles = styled.div<Props>`
  .ant-card-head {
    border-bottom: 0px;
  }
  .title {
    display: flex;
    padding: 0 0 0 1%;
    width: 218px;
    height: 26px;
    
    font-size: 18px;
    font-weight: normal;
    
    
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
  }
  .icon {
    padding: 0 0 0 2%;
  }
  .threshold {
    margin: auto auto auto 85%;
  }
  .card {
    border-radius: 8px;
    box-shadow: 0 7px 14px 0 rgba(48, 50, 54, 0.1);
    background-color: #ffffff;
  }
  .ant-card-body {
    padding: 0 24px 0 24px;
  }
`;
