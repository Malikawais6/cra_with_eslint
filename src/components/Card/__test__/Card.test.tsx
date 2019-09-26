import * as React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";

function renderField() {
  return (
    <Card title="Title" extra="Yes"/>
  );
}

it("Make sure Card is working correctly: ", async () => {
  const { container } = render(renderField());
  const getCardElement = () => container.getElementsByClassName("ant-card");
  expect(getCardElement().length).not.toBe(0);
});

it("Make sure Card has content: ", async () => {
  const { container } = render(renderField());
  const getCardElement = () => container.getElementsByClassName("ant-card-body");
  expect(getCardElement().length).not.toBe(0);
});

it("Make sure Card has icon: ", async () => {
  const { container } = render(renderField());
  const getCardElement = () => container.getElementsByClassName("ant-card-extra");
  expect(getCardElement().length).not.toBe(0);
});