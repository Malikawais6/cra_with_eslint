import React from "react";
import { storiesOf } from "@storybook/react";
import Number from "./Number";

storiesOf("Number", module).add("Default", () => (
  <Number content="$12221455254" size="medium" showIcon={true} />
));
storiesOf("Number", module).add(
  "Default with Props",
  () => (
    <Number
      content="$12221455254"
      size="larger"
      threshold={20}
      showDownArrow={true}
    />
  ),
  { info: { inline: true } }
);
storiesOf("Number", module).add(
  "Default with Props with amount",
  () => (
    <Number
      content="$12221455254"
      size="larger"
      threshold={20}
      showIcon={true}
    />
  ),
  { info: { inline: true } }
);
