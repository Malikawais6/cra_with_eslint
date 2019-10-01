import React from "react";
import { storiesOf } from "@storybook/react";

import { CardVisual } from "./CardVisual/CardVisual";
import {
  DefaultCardData,
  CompleteCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/mockData";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Card Visual", module).add("Card Visual Default", () => (
  <StoryWrapper>
    <CardVisual data={DefaultCardData} numberSize={"large"} />
  </StoryWrapper>
));

storiesOf("Card Visual", module).add(
  "Card Visual With Line Chart and Progress Bar",
  () => (
    <StoryWrapper>
      <CardVisual
        showChart={true}
        showProgressBar={true}
        numberSize={"x-large"}
        percentSize={"large"}
        data={CompleteCardData}
      />
    </StoryWrapper>
  )
);

storiesOf("Card Visual", module).add(
  "Card Visual With Number and Progress Bar",
  () => (
    <StoryWrapper>
      <CardVisual
        showInlineProgressBar={true}
        numberSize={"medium"}
        data={InlineProgressBarWithNumberData}
      />
    </StoryWrapper>
  )
);
