import styled from "styled-components";
import { Props } from "./Card.type";
export const CardStyles = styled.div<Props>`
  .ant-card-body {
    padding: 0 24px 24px 24px;
  }
  .ant-card-head {
    border-bottom: 0px;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      display: flex;
      font-size: 18px;
      color: #56556c;
    }
    .icon {
      padding: 0 0 0 2%;
    }
    .threshold {
      margin-right: 1em;
      font-size: 20px;
      line-height: 1.2;
      color: #56556c;
    }
  }

  .card {
    border-radius: 8px;
    box-shadow: 0 7px 14px 0 rgba(48, 50, 54, 0.1);
    background-color: #ffffff;
  }
`;
