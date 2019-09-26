import styled from "styled-components";

import { LegendItemStyledProps } from "./types";

export const LegendsStyled = styled.div`
  display: flex;
  direction: rtl;
`;

export const LegendItemStyled = styled.div<LegendItemStyledProps>`
  cursor: pointer;
  direction: ltr;
  padding-right: 10px;
  ${props => props.theme["no-select"]};

  > span {
    color: ${props => (props.color ? props.color : "black")};
    padding-right: 2px;
    font-size: 13px;
  }
`;
