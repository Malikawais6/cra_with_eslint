import styled from "styled-components";
import { Props } from "./Number.type";
const SIZE = {
  "x-small": "12px",
  small: "16px",
  medium: "20px",
  large: "32px",
  "x-large": "42px"
};
export const NumberStyles = styled.div<Props>`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content {
      display: flex;
      align-self: center;
      align-items: baseline;
      
    }
    .heading {
      font-size: ${props => SIZE[props.size || "large"]};
      font-weight: 500;
      line-height: 1;
      letter-spacing: normal;
      color: #56556c;
    }
    .threshold {
      display: flex;
      margin-left: 1em;
      margin-bottom: 0;
      font-size: 12px;
      align-items: baseline;
      color: ${props =>
        props.thresholdStatus === "top"
          ? "#00c972"
          : props.thresholdStatus === "down"
          ? "#ce4c00"
          : "#a7a7bb"};
      .ratio {
        padding-left: 2px;
      }
    }
    .amount {
      color: grey;
      font-size: 16px;
      font-weight: normal;
      line-height: 1.25;
      letter-spacing: normal;
      color: #a7a7bb;
    }
  }
`;
