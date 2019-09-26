import React from "react";
import { storiesOf } from "@storybook/react";

import { CardVisual } from "./CardVisual/CardVisual";
import {
  defaultVisualData,
  cardData,
  inlineBarCardData
} from "../Visuals/mockData";

storiesOf("Card Visual", module).add("Card Visual Default", () => (
  <CardVisual data={defaultVisualData} numberSize={"large"} />
));

storiesOf("Card Visual", module).add(
  "Card Visual With Line Chart and Progress Bar",
  () => (
    <CardVisual
      showChart={true}
      showProgressBar={true}
      numberSize={"x-large"}
      data={cardData}
    />
  )
);

storiesOf("Card Visual", module).add(
  "Card Visual With Number and Progress Bar",
  () => (
    <CardVisual
      showInlineProgressBar={true}
      numberSize={"medium"}
      data={inlineBarCardData}
    />
  )
);
