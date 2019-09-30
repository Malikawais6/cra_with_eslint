import styled from "styled-components";

import { Props } from "./Card.type";

export const CardStyles = styled.div<Props>`
  .default-card-wrapper {
    padding: 17px 25px;
    display: grid;
    grid-row-gap: 10px;

    .ant-card-head-wrapper {
      line-height: 1;
    }

    .threshold-ratio {
      margin: -45px 0;
    }
  }

  .visualization-card {
    padding: 20px 25px;
    .numbers-container {
      margin-bottom: 10px;
    }
  }

  .cost-card {
    padding: 15px 25px;
    display: grid;
    grid-row-gap: 10px;
    .ant-card-head-wrapper {
      line-height: 1;
    }
  }
  .ant-card {
    background-color: transparent;
  }

  .ant-card-head {
    border-bottom: 0px;
    padding: 0;
    min-height: auto;
  }
  .ant-card-extra {
    padding: 0;
  }
  .ant-card-head-title {
    padding: 0;
    overflow:unset;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      display: flex;
      font-size: ${(props: Props) =>
        props.cardType === "visual" ? "18px" : "16px"};
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
    padding: 0;

    .ant-row {
      margin: 0;
    }
  }
  .ant-card-bordered {
    border: none;
  }
`;
