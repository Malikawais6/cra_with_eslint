import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Icon from "../Icon";

function renderField() {
  return (
    <Icon
      icon={{ type: "star" }}
      tooltip={{
        title: () => <span>prompt text</span>
      }}
    />
  );
}

it("Make sure icon is working correctly: ", async () => {
  const { container } = render(renderField());
  const getTooltipElement = () => container.getElementsByClassName("anticon");
  expect(getTooltipElement().length).not.toBe(0);
});

it("Make sure tooltip is working correctly: ", async () => {
  const { container } = render(renderField());
  const barRect = container.querySelector(".antd-tooltip-open") || window;

  const getTooltipElement = () => container.getElementsByClassName("anticon");

  fireEvent.mouseOver(barRect);
  expect(getTooltipElement().length).not.toBe(0);
});
