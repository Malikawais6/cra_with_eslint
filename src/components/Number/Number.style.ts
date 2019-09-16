import styled from "styled-components";
import { Props } from "./Number.type";

export const NumberStyles = styled.h1<Props>`
  .heading {
    font-size: ${props => props.size};
    display: flex;
    margin: auto 78% auto auto;
  }
  span {
    margin: 8% auto auto auto;
    display: flex;
    font-size: 12px;
    color: ${props =>
      props.thresholdStatus === "top"
        ? "green"
        : props.thresholdStatus === "down"
        ? "red"
        : "grey"};
  }
  .amount {

    margin:8% auto auto 100%;
    color: grey;
    font-size: small;
  }
`;
