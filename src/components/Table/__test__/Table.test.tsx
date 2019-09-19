import * as React from "react";
import { render } from "@testing-library/react";
import { Table } from "../Table";

function renderField() {
  return <Table />;
}

it("Make sure Line is working correctly: ", async () => {
  const { container } = render(renderField());
  const getLineElement = () => container.getElementsByClassName("ant-Line");
  expect(getLineElement().length).not.toBe(0);
});

it("Make sure Line has content: ", async () => {
  const { container } = render(renderField());
  const getLineElement = () =>
    container.getElementsByClassName("ant-Line-body");
  expect(getLineElement().length).not.toBe(0);
});

it("Make sure Line has icon: ", async () => {
  const { container } = render(renderField());
  const getLineElement = () =>
    container.getElementsByClassName("ant-Line-extra");
  expect(getLineElement().length).not.toBe(0);
});
