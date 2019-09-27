import styled from "styled-components";

export const PeriodSelectStyle = styled.div`
  position: relative;

  & > svg {
    margin: 0.3em;
    position: absolute;
    top: calc(50% - 17px);
    left: 10px;
    z-index: 1;
  }

  .ant-select-selection--single {
    width: 214px;
    height: 51px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 5px 18px -10px rgba(90, 91, 105, 0.25);
    background-color: #ffffff;

    .ant-select-arrow {
      color: #56556c;
      margin-top: -9px;
      right: 20px;
    }

    .ant-select-selection__rendered {
      margin-left: 67px;
      line-height: 51px;
    }
  }

  .ant-select-selection-selected-value {
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #56556c;
  }
`;
