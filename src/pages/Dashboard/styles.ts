import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardActionsStyle = styled.div`
  display: flex;
  padding: 1.1em 0;
  justify-content: flex-end;
`;

export const EditDashboardLinkStyle = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  align-self: center;
  cursor: pointer;
  border: none;
  background: transparent;
  box-shadow: none;
  padding: 1px 2em 0 0;
  display: flex;

  &:hover {
    background: transparent;
    color: #56556c;
  }

  > span {
    margin-left: 0.2em;
  }
`;

export const FinanceStyles = styled.div`
  padding: 15px 30px;
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
    display: flex;
    align-items: center;
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
  
  .buttons {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 45px;

    .edit-button {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 8px;
      align-items: center;

      .ant-btn {
        padding: 0;
      }
    }
  }

  .content {
    align-self: center;
    padding-top: 0.5em;
  }
  .inner-container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0 0 15px 0;

    .heading {
      display: flex;
      align-items: baseline;
    }
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
