import React from "react";
import { storiesOf } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";
import { ProgressBarStory } from "./ProgressBar.style";

storiesOf("Progress Bar", module).add("Progress Bar Default", () => (
  <ProgressBarStory>
    <ProgressBar percent={50} />
  </ProgressBarStory>
));

storiesOf("Progress Bar", module).add("Progress Bar Success", () => (
  <ProgressBarStory>
    <ProgressBar percent={100} />
  </ProgressBarStory>
));

storiesOf("Progress Bar", module).add("Progress Bar Failure", () => (
  <ProgressBarStory>
    <ProgressBar percent={30} />
  </ProgressBarStory>
));
