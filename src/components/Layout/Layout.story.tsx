import React from "react";
import { storiesOf } from "@storybook/react";

import { StoryWrapper } from "../StoryWrapper";
import { Layout } from "./Layout";

storiesOf("Layout", module).add("Layout Default", () => (
  <StoryWrapper>
    <Layout />
  </StoryWrapper>
));
