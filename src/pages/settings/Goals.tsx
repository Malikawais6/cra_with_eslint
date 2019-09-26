import React from "react";
import { GoalsContextProvider } from "./GoalsContextProvider";
import { Table } from "./Table/Table";
import { GoalTableStyles } from "./styles";
import { Button } from "antd";
import { CaretLeftGray, CaretRightGray } from "../../assets";
const Goals = () => {
  return (
    <GoalsContextProvider>
      <GoalTableStyles>
        <div className="outter-div">
          <div>
            <span className="year"> 2019 </span>
            <span ><Button className="circle-button"><CaretLeftGray /></Button></span>
            <span ><Button className="circle-button"><CaretRightGray /></Button></span>
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
