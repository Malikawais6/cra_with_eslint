import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "./Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets/";
import { CardVisual } from "../Visuals/CardVisual/CardVisual";
import {
  CompleteCardData,
  DefaultCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/mockData";

storiesOf("Card", module).add("Default", () => (
  <Card>
    <CardVisual
      showChart={true}
      showProgressBar={true}
      numberSize={"x-large"}
      data={CompleteCardData}
    />
  </Card>
));

storiesOf("Card", module).add(
  "Card with Line Chart and Progress Bar",
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
      width="353px"
      height="342px"
    >
      <CardVisual
        showChart={true}
        showProgressBar={true}
        numberSize={"large"}
        data={CompleteCardData}
      />
    </Card>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Default without Chart and Progress Bar",
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
      width="353px"
      height="342px"
    >
      <CardVisual numberSize={"x-large"} data={DefaultCardData} />
    </Card>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Default with Inline Progress Bar",
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
      width="353px"
      height="342px"
      showInfo={true}
      threshold={20}
    >
      <CardVisual
        showInlineProgressBar={true}
        numberSize={"medium"}
        data={InlineProgressBarWithNumberData}
      />
    </Card>
  ),
  { info: { inline: true } }
);
