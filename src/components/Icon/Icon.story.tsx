import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icon", module).add("Default", () => <Icon icon={{ type: "star" }}/>);
storiesOf("Icon", module).add(
  "Default with Props",
  () => <Icon icon={{ type: "star" }} tooltip={{title:"test"}} />,
  { info: { inline: true } }
);
