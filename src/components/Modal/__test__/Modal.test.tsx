import * as React from "react";
import { render } from "@testing-library/react";

import { ModalComponent } from "../Modal";

function renderField() {
  return <ModalComponent visible={true} />;
}

it("Make sure modal renders properly", () => {
  const { getByTestId } = render(renderField());

  const ModalElement = getByTestId("modal-wrapper");

  expect(ModalElement.className.length).not.toBeLessThan(1);
});
