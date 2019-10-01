import React from "react";
import { storiesOf } from "@storybook/react";

import { StoryWrapper } from "../StoryWrapper";
import { GridLayout } from "./GridLayout";

storiesOf("Layout", module).add("Layout Default", () => (
  <StoryWrapper>
    <GridLayout />
  </StoryWrapper>
));
