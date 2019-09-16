import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Number from "../Number";

function renderField() {
  return (
    <Number
      content="$12221455254"
      size="larger"
      threshold={20}
      thresholdStatus="top"
    />
  );
}

it("Make sure Number is working correctly with up arrow: ", async () => {
  const { container } = render(renderField());
  const getNumberElement = () => container.getElementsByClassName("sc-bwzfXH");
  expect(getNumberElement().length).not.toBe(0);
});

it("Make sure Number content is working correctly: ", async () => {
  const { container } = render(renderField());
  const getNumberElement = () => container.getElementsByClassName("heading");
  expect(getNumberElement().length).not.toBe(0);
});
