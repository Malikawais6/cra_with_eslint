import styled from "styled-components";
import { Button } from "antd";
export const EditStyledButton = styled(Button)`
  &.ant-btn {
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    align-self: center;
    cursor: pointer;
    border: none;
    background: transparent;
    box-shadow: none;
    padding: 1px 3em 0 0;
    &:hover {
      background: transparent;
      color: #56556c;
    }
  }
`;
export const StyledButton = styled(Button)`
  &.ant-btn {
    width: 214px;
    height: 51px;
    border-radius: 8px;
    box-shadow: 0 5px 18px -10px rgba(90, 91, 105, 0.25);
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    float: left;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    .icon-down {
      float: right;
      padding: 2%;
    }
    .calendar-icon {
      float: left;
    }
  }
`;

export const FinanceStyles = styled.div<any>`
  margin: 2em;
  .container {
    box-shadow: ${(props: any) =>
      props.settings ? "none" : "inset 0 -1px 0 0 #dbdbe6"};
    background-color: rgba(216, 216, 216, 0);
  }
  .title {
    font-size: 14px;
    font-weight: 500;
    color: #56556c;
  }
  .heading {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.14;
    color: #56556c;
    float: left;
    flex-grow: 1;
  }
  .date-time {
    font-size: 12px;
    font-weight: normal;
    line-height: 1.67;
    letter-spacing: normal;
    color: #56556c;
    margin-left: 1em;
  }
  .inner-container {
    display: flex;
  }
  .buttons {
    float: right;
    display: flex;
  }

  .content {
    align-self: center;
    padding-top: 0.5em;
  }
  .inner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 0 1em 0;
  }
  .settings {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    width: 265px;
    height: 51px;
    border-radius: 8px;
    box-shadow: 0 8px 18px -10px #0e99ae;
    background-color: #22bcd3;
  }
`;
