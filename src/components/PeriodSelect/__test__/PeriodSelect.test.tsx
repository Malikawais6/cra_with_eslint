import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";

import { PeriodSelect, PeriodSelectProps } from "../index";

beforeEach(cleanup);

const options = [
  {
    value: "lastmonth",
    label: "Last Month"
  },
  {
    value: "lastweek",
    label: "Last Week"
  },
  {
    value: "lastyear",
    label: "Last Year"
  }
];

const onChange = jest.fn((event: any) => {
  console.log("event", event);
});

const renderComponent = (props: PeriodSelectProps) => {
  return render(<PeriodSelect {...props} />);
};

it("Make sure the PeriodSelect renders properly", () => {
  const { container, getByText, getByTestId, debug } = renderComponent({
    options
  });

  const calendarIcon = getByTestId("calendar-icon");
  const defaultSelectedValue = getByText(options[0].label);
  const selectField = container.querySelector(".ant-select") as HTMLElement;

  expect(calendarIcon).not.toBe(null);
  expect(defaultSelectedValue.textContent).toBe(options[0].label);

  fireEvent.click(selectField);

  const optionElements = document.getElementsByClassName(
    "ant-select-dropdown-menu-item"
  );

  expect(optionElements.length).toBe(3);
});

it("Make sure the PeriodSelect on select works properly", () => {
  const { container, getByText, getByTestId, debug } = renderComponent({
    options,
    onChange
  });

  const selectField = container.querySelector(".ant-select") as HTMLElement;
  fireEvent.click(selectField);

  const lastWeekOptionElement = getByText(options[1].label);
  fireEvent.click(lastWeekOptionElement);

  const selectedValueElement = container.querySelector(
    ".ant-select-selection-selected-value"
  ) as HTMLElement;

  expect(selectedValueElement.textContent).toBe(options[1].label);
  expect(onChange).toBeCalledTimes(1);
});
