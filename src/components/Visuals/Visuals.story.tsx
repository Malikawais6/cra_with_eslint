import React from "react";
import { storiesOf } from "@storybook/react";

import { CardVisualWithChart } from "./CardVisual/CardVisualWithChart/CardVisualWithChart";
import { CardWithMediumNumberSize } from "./CardVisual/CardWithContentSizes/CardWithMediumNumberSize";
import { CardWithLargeNumberSize } from "./CardVisual/CardWithContentSizes/CardWithLargeNumberSize";
import { CardWithMediumContentSizeAndInlineProgressBar } from "./CardVisual/CardWithInlineProgressBar/CardWithMediumContentSizeAndProgressBar";
import { CardWithLargeContentSizeAndInlineProgressBar } from "./CardVisual/CardWithInlineProgressBar/CardWithLargeContentSizeAndProressBar";

import {
  DefaultCardData,
  CompleteCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/mockData";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Card Visual", module).add("Card Visual With Chart", () => (
  <StoryWrapper>
    <CardVisualWithChart data={CompleteCardData} />
  </StoryWrapper>
));

storiesOf("Card Visual", module).add(
  "Card Visual With Medium Number Size",
  () => (
    <StoryWrapper>
      <CardWithMediumNumberSize data={DefaultCardData} />
    </StoryWrapper>
  )
);

storiesOf("Card Visual", module).add(
  "Card Visual With Large Number Size",
  () => (
    <StoryWrapper>
      <CardWithLargeNumberSize data={DefaultCardData} />
    </StoryWrapper>
  )
);

storiesOf("Card Visual", module).add(
  "Card Visual With Medium Content and Inline Progress Bar",
  () => (
    <StoryWrapper>
      <CardWithMediumContentSizeAndInlineProgressBar
        data={InlineProgressBarWithNumberData}
      />
    </StoryWrapper>
  )
);

storiesOf("Card Visual", module).add(
  "Card Visual With Large Content and Inline Progress Bar",
  () => (
    <StoryWrapper>
      <CardWithLargeContentSizeAndInlineProgressBar
        data={InlineProgressBarWithNumberData}
      />
    </StoryWrapper>
  )
);
