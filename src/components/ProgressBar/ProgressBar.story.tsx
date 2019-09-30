import React from "react";
import { storiesOf } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";
import { ProgressBarStory } from "./ProgressBar.style";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Progress Bar", module).add("Progress Bar Default", () => (
  <StoryWrapper>
    <ProgressBarStory>
      <ProgressBar percent={50} />
    </ProgressBarStory>
  </StoryWrapper>
));

storiesOf("Progress Bar", module).add("Progress Bar Success", () => (
  <StoryWrapper>
    <ProgressBarStory>
      <ProgressBar percent={100} />
    </ProgressBarStory>
  </StoryWrapper>
));

storiesOf("Progress Bar", module).add("Progress Bar Failure", () => (
  <StoryWrapper>
    <ProgressBarStory>
      <ProgressBar percent={30} />
    </ProgressBarStory>
  </StoryWrapper>
));
