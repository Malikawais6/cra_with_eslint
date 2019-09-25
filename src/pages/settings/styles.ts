import styled from "styled-components";

export const GoalTableStyles = styled.div`
  .outter-div {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .year {
    font-family: Visuelt;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
  }
  .circle-button {
    width: 32px;
    height: 32px;
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.07),
      0 7px 14px 0 rgba(60, 66, 67, 0.1);
    background-color: #ffffff;
    border-radius: 16px !important;
    padding: 3px 0 0 3px;
    margin: 0 4px 0 4px;
  }
  .view{
    align-self: center;
  }
  .duration{
    font-family: Visuelt;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #56556c;
    margin: 0 0 0 15px;
  }
  .goalTable {
    border-radius: 8px;
    box-shadow: 0 7px 14px 0 var(--charcoal-grey-10);
    background-color: #ffffff;
  }
`;
