import React from "react";
import { storiesOf } from "@storybook/react";

import { AlertComponent } from "./Alert";

storiesOf("Alert", module).add("Default", () => (
  <AlertComponent message="text" />
));
