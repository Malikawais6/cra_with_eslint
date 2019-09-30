import React from "react";
import { storiesOf } from "@storybook/react";

import { StoryWrapper } from "../StoryWrapper";
import { ComponentLayout } from "./ComponentLayout";

storiesOf("Layout", module).add("Layout Default", () => (
  <StoryWrapper>
    <ComponentLayout />
  </StoryWrapper>
));
