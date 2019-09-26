import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets/";
import Number from "../Number/Number"
storiesOf("Card", module).add("Default", () => <Card>Hello</Card>);
storiesOf("Card", module).add(
  "Default with Props",
  () => (
    <Card
      title="Title"
      extra={
        <Icon
          icon={{ component: () => <GraphIcon /> }}
          tooltip={{
            title: () => <span>prompt text</span>
          }}
        />
      }
      showInfo={true}
      threshold={20}
    >
      <Number
        content="$12221455254"
        size="x-large"
        threshold={20}
        thresholdStatus="top"
      />
    </Card>
  ),
  { info: { inline: true } }
);
