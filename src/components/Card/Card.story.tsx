import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import Icon from "../Icon/Icon";
import {GraphIcon} from "../../assets/"
storiesOf("Card", module).add("Default", () => <Card>Hello</Card>);
storiesOf("Card", module).add(
  "Default with Props",
  () => (
    <Card
      title="Title"
      extra={
        <Icon
          icon={{ component:()=> <GraphIcon/> }}
          tooltip={{
            title: () => <span>prompt text</span>
          }}
        />
      }
      width="353px"
      height="342px"
      showInfo={true}
      threshold={20}
    >
      Content
    </Card>
  ),
  { info: { inline: true } }
);
