import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "./Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets/";
import { CardVisualWithChart } from "../Visuals/CardVisual/CardVisualWithChart/CardVisualWithChart";
import { CardWithMediumNumberSize } from "../Visuals/CardVisual/CardWithContentSizes/CardWithMediumNumberSize";
import { CardWithLargeNumberSize } from "../Visuals/CardVisual/CardWithContentSizes/CardWithLargeNumberSize";
import { CardWithMediumContentSizeAndInlineProgressBar } from "../Visuals/CardVisual/CardWithInlineProgressBar/CardWithMediumContentSizeAndProgressBar";
import { CardWithLargeContentSizeAndInlineProgressBar } from "../Visuals/CardVisual/CardWithInlineProgressBar/CardWithLargeContentSizeAndProressBar";

import { StoryWrapper } from "../StoryWrapper";
import {
  CompleteCardData,
  DefaultCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/mockData";

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
        <CardVisualWithChart data={CompleteCardData} />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Card with Medium Number Size",
  () => (
    <StoryWrapper>
      <Card title="Title" showInfo={true} width="353px" height="342px">
        <CardWithMediumNumberSize data={DefaultCardData} />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Card with Large Number Size",
  () => (
    <StoryWrapper>
      <Card title="Title" showInfo={true} width="353px" height="342px">
        <CardWithLargeNumberSize data={DefaultCardData} />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Default with Inline Progress Bar and Medium Number Size",
  () => (
    <StoryWrapper>
      <Card title="Title" showInfo={true} threshold={20}>
        <CardWithMediumContentSizeAndInlineProgressBar
          data={InlineProgressBarWithNumberData}
        />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Default with Inline Progress Bar and Large Number Size",
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
        <CardWithLargeContentSizeAndInlineProgressBar
          data={InlineProgressBarWithNumberData}
        />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Card", module).add(
  "Card Default",
  () => (
    <StoryWrapper>
      <Card title="Title">
        <CardVisualWithChart data={CompleteCardData} />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);
