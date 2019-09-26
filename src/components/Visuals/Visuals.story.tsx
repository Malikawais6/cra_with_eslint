import React from "react";
import { storiesOf } from "@storybook/react";

import { CardVisual } from "./CardVisual/CardVisual";
import {
  DefaultCardData,
  CompleteCardData,
  InlineProgressBarWithNumberData
} from "../Visuals/mockData";

storiesOf("Card Visual", module).add("Card Visual Default", () => (
  <CardVisual data={DefaultCardData} numberSize={"large"} />
));

storiesOf("Card Visual", module).add(
  "Card Visual With Line Chart and Progress Bar",
  () => (
    <CardVisual
      showChart={true}
      showProgressBar={true}
      numberSize={"x-large"}
      data={CompleteCardData}
    />
  )
);

storiesOf("Card Visual", module).add(
  "Card Visual With Number and Progress Bar",
  () => (
    <CardVisual
      showInlineProgressBar={true}
      numberSize={"medium"}
      data={InlineProgressBarWithNumberData}
    />
  )
);
