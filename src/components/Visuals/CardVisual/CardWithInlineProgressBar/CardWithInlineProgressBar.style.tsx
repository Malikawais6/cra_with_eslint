import styled from "styled-components";
import {Props} from "../CardVisual.type"
export const CardVisualInlineProgressStyled = styled.div`
  .ant-row {
    margin-top: ${(props: Props) => (props.showChart ? "10px" : "0px")};
  }
  .inlineNumberWithProgress {
    display: flex;
    justify-content: space-between;
  }
  .progressBar {
    align-self: flex-end;
    width: 100%;
    max-width: 113px;
    margin-left: 10px;
  }
`;
