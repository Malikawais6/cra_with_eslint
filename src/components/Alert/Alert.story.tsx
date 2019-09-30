import React from "react";
import { storiesOf } from "@storybook/react";

import { Alert } from "./Alert";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Alert", module).add("Default", () => (
  <StoryWrapper>
    <Alert message="text" />
  </StoryWrapper>
));
