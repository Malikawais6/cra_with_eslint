import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "./Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets/";
import {
  NumberWithChart,
  NumberMedium,
  NumberLarge,
  NumberLargeWithProgressBar,
  NumberMediumWithProgressBar
} from "../Visuals/";
import { StoryWrapper } from "../StoryWrapper";
import {
  CompleteCardData,
  DefaultCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/__mock__/mockData";

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
        <NumberWithChart data={CompleteCardData} />
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
        <NumberMedium data={DefaultCardData} />
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
        <NumberLarge data={DefaultCardData} />
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
        <NumberMediumWithProgressBar data={InlineProgressBarWithNumberData} />
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
        <NumberLargeWithProgressBar data={InlineProgressBarWithNumberData} />
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
        <NumberWithChart data={CompleteCardData} />
      </Card>
    </StoryWrapper>
  ),
  { info: { inline: true } }
);
