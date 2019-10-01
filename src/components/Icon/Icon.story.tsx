import React from "react";
import { storiesOf } from "@storybook/react";

import Icon from "./Icon";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Icon", module).add("Default", () => (
  <StoryWrapper>
    <Icon icon={{ type: "star" }} />
  </StoryWrapper>
));

storiesOf("Icon", module).add(
  "Default with Props",
  () => (
    <StoryWrapper>
      <Icon icon={{ type: "star" }} tooltip={{ title: "test" }} />
    </StoryWrapper>
  ),
  { info: { inline: true } }
);
