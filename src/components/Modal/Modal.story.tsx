import React from "react";
import { storiesOf } from "@storybook/react";

import { ModalComponent } from "./Modal";
import Line from "../Line/Line";
import { LegendSeriesData } from "../Line/__mock__/mockdata";
import { LineChartStyled } from "./Modal.style";
import { StoryWrapper } from "../StoryWrapper";

storiesOf("Modal", module).add("Default", () => (
  <StoryWrapper>
    <ModalComponent title="Default Modal" visible={true}>
      <p>Content</p>
    </ModalComponent>
  </StoryWrapper>
));

storiesOf("Modal", module).add(
  "Modal Without Footer",
  () => {
    return (
      <StoryWrapper>
        <ModalComponent
          title="Gift Card Volume"
          visible={true}
          footer={false}
          width="960px"
        >
          <LineChartStyled>
            <Line
              showXAxis={true}
              showYAxis={true}
              showLegends={true}
              showLabels={true}
              showGridLines={true}
              showLineMarks={true}
              seriesData={LegendSeriesData(false)}
            ></Line>
          </LineChartStyled>
        </ModalComponent>
      </StoryWrapper>
    );
  },
  {
    info: { inline: true }
  }
);
