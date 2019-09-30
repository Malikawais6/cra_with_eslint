import React from "react";
import { storiesOf } from "@storybook/react";

import Number from "./Number";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Number", module).add("Default", () => (
  <StoryWrapper>
    <Number content="$12221455254" size="large" />
  </StoryWrapper>
));

storiesOf("Number", module).add(
  "Content with down arrow  and threshold",
  () => (
    <StoryWrapper>
      <Number
        content="$12221455254"
        size="large"
        threshold={20}
        thresholdStatus="down"
      />
    </StoryWrapper>
  )
);

storiesOf("Number", module).add(
  "Content with up arrow and threshold",
  () => (
    <StoryWrapper>
      <Number
        content="$12221455254"
        size="x-large"
        threshold={20}
        thresholdStatus="top"
      />
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Number", module).add(
  " Content with threshold and normal style",
  () => (
    <StoryWrapper>
      <Number
        content="$12221455254"
        size="x-large"
        threshold={12}
        thresholdStatus="normal"
      />
    </StoryWrapper>
  ),
  { info: { inline: true } }
);

storiesOf("Number", module).add(
  "Content with amount",
  () => (
    <StoryWrapper>
      <Number content="$12221455254" size="large" showAmount="$153" />
    </StoryWrapper>
  ),
  { info: { inline: true } }
);
