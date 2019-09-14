import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import Icon from "../Icon/Icon";

storiesOf("Card", module).add("Default", () => <Card>Hello</Card>);
storiesOf("Card", module).add(
  "Default with Props",
  () => (
    <Card
      title="Title"
      extra={
        <Icon
          icon={{ type: "star" }}
          tooltip={{
            title: () => <span>prompt text</span>
          }}
        />
      }
      width="30vw"
      height="50vh"
    >
      Content
    </Card>
  ),
  { info: { inline: true } }
);
