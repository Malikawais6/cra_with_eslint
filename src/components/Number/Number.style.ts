import styled from "styled-components";
import { Props } from "./Number.type";
const SIZE = {
  "x-small": "12px",
  small: "16px",
  medium: "20px",
  large: "32px",
  "x-large": "42px"
};
const MARGIN = {
  "x-small": "0% auto auto 5%",
  small: "1% auto auto 5%",
  medium: "2% auto auto 5%",
  large: "5% auto auto 5%",
  "x-large": "8% auto auto 5%"
};
export const NumberStyles = styled.h1<Props>`
  .heading {
    font-size: ${props => SIZE[props.size || "large"]};
    
    font-weight: 500;
    
    
    line-height: 1;
    letter-spacing: normal;
    color: #56556c;
    display: flex;
    margin: auto 78% auto auto;
  }
  span {
    margin: ${props => MARGIN[props.size || "large"]};
    display: flex;
    font-size: 12px;
    color: ${props =>
      props.thresholdStatus === "top"
        ? "#00c972"
        : props.thresholdStatus === "down"
        ? "#ce4c00"
        : "#a7a7bb"};
  }
  .anticon svg {
    display: inline-block;
    height: 11px !important;
  }
  .amount {
    margin: 4% auto auto 100%;
    color: grey;
    
    font-size: 16px;
    font-weight: normal;
    
    
    line-height: 1.25;
    letter-spacing: normal;
    text-align: right;
    color: #a7a7bb;
  }
`;
