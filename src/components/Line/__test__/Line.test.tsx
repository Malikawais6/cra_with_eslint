import * as React from "react";
import { render } from "@testing-library/react";
import Line from "../Line";

function renderField() {
  return (
    <Line />
  );
}

it("Make sure Line is working correctly: ", async () => {
  const { container } = render(renderField());
  const getLineElement = () => container.getElementsByClassName("ant-Line");
  expect(getLineElement().length).not.toBe(0);
});

it("Make sure Line has content: ", async () => {
  const { container } = render(renderField());
  const getLineElement = () => container.getElementsByClassName("ant-Line-body");
  expect(getLineElement().length).not.toBe(0);
});

it("Make sure Line has icon: ", async () => {
  const { container } = render(renderField());
  const getLineElement = () => container.getElementsByClassName("ant-Line-extra");
  expect(getLineElement().length).not.toBe(0);
});