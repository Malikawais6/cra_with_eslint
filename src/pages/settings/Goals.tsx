import React from "react";
import { GoalsContextProvider } from "./GoalsContextProvider";
import { Table } from "./Table/Table";
import { GoalTableStyles, StyledCircleButton } from "./styles";
import { CaretLeftGray, CaretRightGray } from "../../assets";
const Goals = () => {
  return (
    <GoalsContextProvider>
      <GoalTableStyles>
        <div className="goal-container">
          <div>
            <span className="year"> 2019 </span>
            <span ><StyledCircleButton ><CaretLeftGray /></StyledCircleButton></span>
            <span ><StyledCircleButton ><CaretRightGray /></StyledCircleButton></span>
          </div>
          <div className="view">
          <span className="duration">O</span>
            <span className="duration">Yearly view</span></div>
        </div>
        <div className="goalTable">
          <Table buttonTitle="Add Goal"></Table>
        </div>
      </GoalTableStyles>
    </GoalsContextProvider>
  );
};

export default Goals;
