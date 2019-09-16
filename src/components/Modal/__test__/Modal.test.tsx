import * as React from "react";
import { render } from "@testing-library/react";

import { ModalComponent } from "../Modal";

function renderField() {
  return <ModalComponent visible={true} />;
}

it("Make sure modal renders properly", () => {
  const { container } = render(renderField());

  const ModalElement = container.getElementsByClassName("ant-modal-mask");

  expect(ModalElement.length).not.toBeLessThan(1);
});
