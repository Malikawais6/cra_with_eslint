import React, { useState, useReducer, Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Table } from "./Table";
import { TableContext, initialContent } from "../../context/";
import { reducer } from "../../reducers/table";
import Icon from "../Icon/Icon";
const dataSource: any = [
  {
    key: "1",
    title: "Revenue",
    jan: "30",
    feb: "",
    mar: "",
    apr: "40",
    may: "",
    jun: "",
    july: "",
    aug: "70",
    sep: "",
    oct: "",
    nov: "",
    dec: ""
  },
  {
    key: "2",
    title: "Gift card",
    jan: "30",
    feb: "7",
    mar: "",
    apr: "40",
    may: "",
    jun: "",
    july: "",
    aug: "70",
    sep: "",
    oct: "",
    nov: "",
    dec: ""
  },
  {
    key: "3",
    title: "Saas",
    jan: "30",
    feb: "",
    mar: "",
    apr: "40",
    may: "",
    jun: "",
    july: "",
    aug: "70",
    sep: "",
    oct: "",
    nov: "",
    dec: ""
  }
];

const columns: any = [
  {
    title: "",
    dataIndex: "title",
    key: "title",

    editable: false
  },
  {
    title: "Jan",
    dataIndex: "jan",
    key: "jan",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Feb",
    dataIndex: "feb",
    key: "feb",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Mar",
    dataIndex: "mar",
    key: "mar",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Apr",
    dataIndex: "apr",
    key: "apr",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "May",
    dataIndex: "may",
    key: "may",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Jun",
    dataIndex: "jun",
    key: "jun",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "July",
    dataIndex: "july",
    key: "july",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Aug",
    dataIndex: "aug",
    key: "aug",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Sep",
    dataIndex: "sep",
    key: "sep",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Oct",
    dataIndex: "oct",
    key: "oct",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Nov",
    dataIndex: "nov",
    key: "nov",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  },
  {
    title: "Dec",
    dataIndex: "dec",
    key: "dec",
    width: "7%",
    rules: [
      {
        pattern: /^\d{1,3}$/,
        message: "required"
      }
    ]
  }
];

export const TableComponent = () => {
  const [dispatch] = useReducer(reducer, initialContent);
  const onAdd = (data: any) => {
    console.log("onAdd", data);
  };
  const onEdit = (data: any) => {
    console.log("onChange", data);
  };
  const onDelete = () => {
    console.log("on Delete");
  };

  return (
    <TableContext.Provider
      value={{ data: dataSource, columns, dispatch, onAdd, onEdit, onDelete }}
    >
      <Table buttonTitle="Add Goal"></Table>
    </TableContext.Provider>
  );
};

storiesOf("Table", module).add("Default", () => <TableComponent />);
