import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { PeriodSelect } from "./index";
import { StoryWrapper } from "../StoryWrapper";

const options = [
  {
    value: "lastmonth",
    label: "Last Month"
  },
  {
    value: "lastweek",
    label: "Last Week"
  },
  {
    value: "lastyear",
    label: "Last Year"
  }
];

storiesOf("Period Select", module).add("default", () => {
  const onChange = (event: any) => {
    console.log("value", event);
  };
  return (
    <StoryWrapper>
      <PeriodSelect options={options} onChange={onChange} />
    </StoryWrapper>
  );
});
