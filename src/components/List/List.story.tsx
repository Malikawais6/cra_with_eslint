import React from "react";
import { storiesOf } from "@storybook/react";

import { StoryWrapper } from "../StoryWrapper";
import List from "./List";

storiesOf("List", module).add("Default", () => (
  <StoryWrapper>
    <List />
  </StoryWrapper>
));
