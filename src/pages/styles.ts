import styled from "styled-components";

export const FinanceStyles = styled.div<any>`
  margin: 16px 35px 0 35px;
  .container {
    height: 90px;
    box-shadow: ${(props:any) => props.settings ? "none": "inset 0 -1px 0 0 #dbdbe6"};
    background-color: rgba(216, 216, 216, 0);
  }
  .title {
    font-family: Visuelt;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;

  }
  .heading {
    font-family: Visuelt;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #56556c;
    float: left;
    flex-grow: 1;
  }
  .date-time {
    font-family: Visuelt;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    color: #56556c;
    margin-left: 10px;
  }
  .inner-container {
    display: flex;
  }
  .buttons {
    float: right;
    display: flex;
  }
  .edit {
    font-family: Visuelt;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    align-self: center;
    margin: 0 10% 0 1%;
    cursor: pointer;
  }
  .dropdown {
    width: 214px;
    height: 51px;
    border-radius: 8px;
    box-shadow: 0 5px 18px -10px rgba(90, 91, 105, 0.25);
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    margin-right:20px;
  }
  .calendar-icon {
    float: left;
  }
  .dropdown-text {
    float: left;
    font-family: Visuelt;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
  }
  .icon-down {
    float: right;
    padding: 2%;
  }
  .content {
    align-self: center;
    padding: 2% 0 0 0;
  }
  .inner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px 10px 0;
  }

  .item {
    width: 30%;
    text-align: start;
  }
  .settings{
    font-family: Visuelt;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    width: 265px;
    height: 51px;
    border-radius: 8px;
    box-shadow: 0 8px 18px -10px #0e99ae;
    background-color: #22bcd3;
  }
`;
