import React from "react";
import { storiesOf } from "@storybook/react";
import Number from "./Number";

storiesOf("Number", module).add("Default", () => (
  <Number content="$12221455254" size="large"  />
));
storiesOf("Number", module).add("Content with down arrow  and threshold", () => (
  <Number content="$12221455254" size="large" threshold={20}
  thresholdStatus="down" />
));
storiesOf("Number", module).add(
  "Content with up arrow and threshold",
  () => (
    <Number
      content="$12221455254"
      size="x-large"
      threshold={20}
      thresholdStatus="top"
    />
  ),
  { info: { inline: true } }
);
storiesOf("Number", module).add(
  " Content with threshold and normal style",
  () => (
    <Number
      content="$12221455254"
      size="x-large"
      threshold={12}
      thresholdStatus="normal"
    />
  ),
  { info: { inline: true } }
);

storiesOf("Number", module).add(
  "Content with amount",
  () => (
    <Number
      content="$12221455254"
      size="large"
      showAmount="$153"
    />
  ),
  { info: { inline: true } }
);