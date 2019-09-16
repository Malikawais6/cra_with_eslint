import React from "react";
import { storiesOf } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

storiesOf("Progress Bar", module).add("Progress Bar Default", () => (
  <ProgressBar percent={50} />
));

storiesOf("Progress Bar", module).add("Progress Bar Success", () => (
  <ProgressBar percent={100} strokeColor="#00c972" />
));

storiesOf("Progress Bar", module).add("Progress Bar Failure", () => (
  <ProgressBar percent={30} strokeColor="#ce4c00" />
));
