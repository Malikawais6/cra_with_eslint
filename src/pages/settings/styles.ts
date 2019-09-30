import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "antd";

export const StyledCircleButton = styled(Button)`
  &.ant-btn {
    width: 32px;
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.07),
      0 7px 14px 0 rgba(60, 66, 67, 0.1);
    background-color: #ffffff;
    border-radius: 16px;
    padding: 0.5em;
    margin: 0 4px 0 4px;
  }
`;

export const GoalTableStyles = styled.div`
  .goal-container {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .year {
    font-size: 28px;
    font-weight: 500;
    color: #56556c;
  }
  .view {
    align-self: center;
  }
  .duration {
    font-size: 16px;
    font-weight: 500;

    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    margin-left: 15px;
  }
  .goalTable {
    border-radius: 8px;
    box-shadow: 0 7px 14px 0 var(--charcoal-grey-10);
    background-color: #ffffff;
  }
`;

export const BackToDashboardLinkStyle = styled(Link)`
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
