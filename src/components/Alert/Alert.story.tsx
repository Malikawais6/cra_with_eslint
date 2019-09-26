import React from "react";
import { storiesOf } from "@storybook/react";

import { Alert } from "./Alert";

storiesOf("Alert", module).add("Default", () => (
  <Alert message="text" />
));
