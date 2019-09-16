import React from "react";
import { storiesOf } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

storiesOf("Progress Bar", module).add("Progress Bar Default", () => (
  <ProgressBar percent={50} />
));

storiesOf("Progress Bar", module).add("Progress Bar Success", () => (
  <ProgressBar percent={100} status="success" />
));

storiesOf("Progress Bar", module).add("Progress Bar Failure", () => (
  <ProgressBar percent={30} status="exception" />
));
