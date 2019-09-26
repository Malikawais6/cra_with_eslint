import React from "react";
import { storiesOf } from "@storybook/react";
import Line from "./Line";

storiesOf("Line", module).add("Default", () => (
  <div>
    <Line HorizontalGridLines="dashed"></Line>
  </div>
));
storiesOf("Line", module).add("Default with Props", () => <Line></Line>, {
  info: { inline: true }
});
