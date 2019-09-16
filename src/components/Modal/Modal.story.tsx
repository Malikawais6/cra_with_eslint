import React from "react";
import { storiesOf } from "@storybook/react";

import { ModalComponent } from "./Modal";

storiesOf("Modal", module).add("Default", () => (
  <ModalComponent title="Default Modal" visible={true}>
    <p>Content</p>
  </ModalComponent>
));

storiesOf("Modal", module).add(
  "Modal Without Footer",
  () => {
    return (
      <ModalComponent
        title="Modal without footer"
        visible={true}
        footer={false}
      >
        <p>Content</p>
      </ModalComponent>
    );
  },
  {
    info: { inline: true }
  }
);
