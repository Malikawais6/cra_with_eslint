import React from "react";
import { storiesOf } from "@storybook/react";

import {
  NumberWithChart,
  NumberMedium,
  NumberLarge,
  NumberLargeWithProgressBar,
  NumberMediumWithProgressBar
} from "./index";

import {
  DefaultCardData,
  CompleteCardData,
  InlineProgressBarWithNumberData
} from "./__mock__/mockData";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Visual", module).add("Number With Chart", () => (
  <StoryWrapper>
    <NumberWithChart data={CompleteCardData} />
  </StoryWrapper>
));

storiesOf("Visual", module).add("Number Medium", () => (
  <StoryWrapper>
    <NumberMedium data={DefaultCardData} />
  </StoryWrapper>
));

storiesOf("Visual", module).add("Number Large", () => (
  <StoryWrapper>
    <NumberLarge data={DefaultCardData} />
  </StoryWrapper>
));

storiesOf("Visual", module).add("Number Medium With Progress Bar", () => (
  <StoryWrapper>
    <NumberMediumWithProgressBar data={InlineProgressBarWithNumberData} />
  </StoryWrapper>
));

storiesOf("Visual", module).add("Number Large With Progress Bar", () => (
  <StoryWrapper>
    <NumberLargeWithProgressBar data={InlineProgressBarWithNumberData} />
  </StoryWrapper>
));
