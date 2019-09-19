import * as React from "react";
import { render } from "@testing-library/react";

import { Alert } from "../Alert";

function renderField() {
  return <Alert message="test" />;
}

it("Make sure Alert renders properly", () => {
  const { container } = render(renderField());
  const AlertElement = container.getElementsByClassName("ant-alert");

  expect(AlertElement.length).not.toBeLessThan(1);
});
