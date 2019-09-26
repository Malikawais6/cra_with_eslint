import * as React from "react";
import { render, fireEvent, getAllByText } from "@testing-library/react";
import { Table } from "../Table";
import { TableContext } from "../../../context";
import { reducer } from "../../../reducers/table";
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

const TableComponent = () => {
  const [data, dispatch] = React.useReducer(reducer, { data: dataSource });
  const onAdd = (data: any) => {
    console.log("onAdd", data);
  };
  const onEdit = (data: any) => {
    console.log("onChange", data);
  };
  const onDelete = (data: any) => {
    console.log("on Delete", data);
  };
  React.useEffect(() => {
    dispatch({ type: "SAVE_DATA", data: { data: dataSource } });
  }, []);
  return (
    <TableContext.Provider
      value={{ data: data.data, columns, dispatch, onAdd, onEdit, onDelete }}
    >
      <Table buttonTitle="Add Goal"></Table>
    </TableContext.Provider>
  );
};

it("Make sure table header working correctly: ", async () => {
  const { container, queryByText } = render(<TableComponent />);
  const header = container.getElementsByClassName("ant-table-thead");
  expect(header.length).toBe(1);
  const body = container.getElementsByClassName("ant-table-tbody");
  expect(body.length).toBeGreaterThan(0);
  const rows = container.getElementsByClassName("ant-table-row");
  expect(rows.length).toBeGreaterThan(0);
  expect(queryByText("Revenue")).toBeTruthy();
});

it("Make sure add popup is working correctly: ", async () => {
  const { container, getByText } = render(<TableComponent />);
  fireEvent.click(getByText("Add Goal"));
  const panel = container.getElementsByClassName("panel");
  expect(panel.length).toBe(1);
});

it("Make sure value change in dropdown is working correctly: ", async () => {
  const { getByText, getByTitle } = render(<TableComponent />);
  fireEvent.click(getByText("Add Goal"));
  fireEvent.click(getByText("Select Item"));
  fireEvent.click(getByText("Lucy"));
  expect(getByTitle("Lucy")).toBeTruthy();
});

it("Make sure value change in dropdown and goal is added : ", async () => {
  const { getByText, getAllByText, container } = render(<TableComponent />);
  fireEvent.click(getByText("Add Goal"));
  fireEvent.click(getByText("Select Item"));
  fireEvent.click(getByText("Lucy"));
  fireEvent.click(getAllByText("Add Goal")[1]);
  const panel = container.getElementsByClassName("panel");
  expect(panel.length).toBe(0);
  return
});
 