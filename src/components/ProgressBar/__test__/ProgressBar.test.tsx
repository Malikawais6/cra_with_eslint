import * as React from "react";
import { render } from "@testing-library/react";

import { ProgressBar } from "../ProgressBar";

function renderField() {
  return <ProgressBar />;
}

it("Make sure Progress Bar renders properly", () => {
  const { container } = render(renderField());
  const ProgressBarElement = container.getElementsByClassName("ant-progress");

  expect(ProgressBarElement.length).not.toBeLessThan(1);
});
