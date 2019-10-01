import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "./Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets/";
import { CardVisual } from "../Visuals/CardVisual/CardVisual";
import { StoryWrapper } from "../StoryWrapper";
import {
  CompleteCardData,
  DefaultCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/mockData";

storiesOf("Card", module).add("Default", () => (
  <StoryWrapper>
    <Card>
      <CardVisual
        showChart={true}
        showProgressBar={true}
        numberSize={"x-large"}
        percentSize={"large"}
        data={CompleteCardData}
        numberThresholdStatus={"top"}
      />
    </Card>
  </StoryWrapper>
));

storiesOf("Card", module).add(
  "Card with Line Chart and Progress Bar",
  () => (
    <StoryWrapper>
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
          percentSize={"large"}
          data={CompleteCardData}
          numberThresholdStatus={"top"}
        />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Default without Chart and Progress Bar",
  () => (
    <StoryWrapper>
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
          numberSize={"x-large"}
          numberThresholdStatus={"top"}
          data={DefaultCardData}
        />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Default with Inline Progress Bar",
  () => (
    <StoryWrapper>
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
        <CardVisual
          showInlineProgressBar={true}
          numberSize={"medium"}
          data={InlineProgressBarWithNumberData}
          numberThresholdStatus={"top"}
        />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);
