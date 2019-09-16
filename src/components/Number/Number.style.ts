import styled from "styled-components";
import { Props } from "./Number.type";

export const NumberStyles = styled.h1<Props>`
  .heading {
    font-size: ${props => props.size};
    display: flex;
  }
  span {
    margin: ${props =>
      props.showIcon && !props.threshold ? "4px 0 0 2%" : "2% 0 0 2%"};
    display: flex;
    font-size: 12px;
    color: ${props =>
      props.showTopArrow ? "green" : props.showDownArrow ? "red" : "grey"};
  }
  .amount {
    margin: auto;
    color: grey;
    font-size: small;
  }
`;
