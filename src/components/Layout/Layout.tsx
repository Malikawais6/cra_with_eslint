import React from "react";
import GridLayout from "react-grid-layout";

import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets";
import { CardVisual } from "../Visuals/CardVisual/CardVisual";
import {
  cardData,
  smallCardData,
  inlineBarCardData,
  simpleCard,
  defaultVisualData
} from "../Visuals/mockData";

export const Layout = () => {
  var layout = [
    { i: "a", x: 0, y: 0, w: 3.8, h: 9.2 },
    { i: "b", x: 3.9, y: 0, w: 3.8, h: 9.2 },
    { i: "c", x: 7.8, y: 0, w: 3.8, h: 2.5 },
    { i: "d", x: 7.8, y: 2, w: 3.8, h: 2.5 },
    { i: "e", x: 7.8, y: 4, w: 3.8, h: 2.5 },
    { i: "f", x: 7.8, y: 6, w: 3.8, h: 2.5 },
    { i: "g", x: 0, y: 8, w: 3.8, h: 2.8 },
    { i: "h", x: 3.9, y: 8, w: 3.8, h: 2.8 },
    { i: "i", x: 7.8, y: 8, w: 3.8, h: 2.8 },
    { i: "j", x: 0, y: 10, w: 3.8, h: 2.8 },
    { i: "k", x: 3.9, y: 10, w: 3.8, h: 2.8 },
    { i: "l", x: 7.8, y: 10, w: 3.8, h: 2.8 },
    { i: "m", x: 0, y: 12, w: 3.8, h: 2.8 },
    { i: "n", x: 3.9, y: 14, w: 3.8, h: 2.8 }
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      compactType={"vertical"}
      isDraggable={false}
    >
      <div key="a" style={{ border: "solid" }}>
        <Card
          title="Gift Card Volume"
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
          width="353px"
          height="342px"
          threshold={20}
        >
          <CardVisual
            showChart={true}
            showProgressBar={true}
            numberSize={"large"}
            data={cardData}
          />
        </Card>
      </div>

      <div key="b" style={{ border: "solid" }}>
        <Card
          title="Revenue"
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
          width="353px"
          height="342px"
        >
          <CardVisual
            showChart={true}
            showProgressBar={true}
            numberSize={"large"}
            data={cardData}
          />
        </Card>
      </div>

      <div key="c" style={{ border: "solid" }}>
        <Card title="Cost per code" width="353px" height="85px" showInfo={true}>
          <CardVisual numberSize={"medium"} data={smallCardData} />
        </Card>
      </div>

      <div key="d" style={{ border: "solid" }}>
        <Card
          title="Processing fee"
          width="353px"
          height="85px"
          showInfo={true}
        >
          <CardVisual numberSize={"medium"} data={smallCardData} />
        </Card>
      </div>

      <div key="e" style={{ border: "solid" }}>
        <Card
          title="SaaS"
          width="353px"
          height="85px"
          threshold={20}
          showInfo={true}
        >
          <CardVisual
            showInlineProgressBar={true}
            numberSize={"medium"}
            data={inlineBarCardData}
          />
        </Card>
      </div>

      <div key="f" style={{ border: "solid" }}>
        <Card title="Miscallaneous" width="353px" height="85px">
          <CardVisual numberSize={"medium"} data={smallCardData} />
        </Card>
      </div>

      <div key="g" style={{ border: "solid" }}>
        <Card title="Runway" width="353px" height="90px">
          <CardVisual numberSize={"large"} data={simpleCard} />
        </Card>
      </div>

      <div key="h" style={{ border: "solid" }}>
        <Card
          title="Cash in Bank"
          width="353px"
          height="90px"
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
        >
          <CardVisual numberSize={"large"} data={simpleCard} />
        </Card>
      </div>

      <div key="i" style={{ border: "solid" }}>
        <Card
          title="Monthly budget"
          width="353px"
          height="90px"
          showInfo={true}
        >
          <CardVisual numberSize={"large"} data={simpleCard} />
        </Card>
      </div>

      <div key="j" style={{ border: "solid" }}>
        <Card title="Floats with Brand" width="353px" height="90px">
          <CardVisual numberSize={"large"} data={defaultVisualData} />
        </Card>
      </div>

      <div key="k" style={{ border: "solid" }}>
        <Card title="Stock held" width="353px" height="90px">
          <CardVisual numberSize={"large"} data={defaultVisualData} />
        </Card>
      </div>

      <div key="l" style={{ border: "solid" }}>
        <Card
          title="Deposits"
          width="353px"
          height="85px"
          threshold={20}
          showInfo={true}
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
        >
          <CardVisual
            numberSize={"medium"}
            showInlineProgressBar={true}
            data={inlineBarCardData}
          />
        </Card>
      </div>

      <div key="m" style={{ border: "solid" }}>
        <Card
          title="Average days float held"
          width="353px"
          height="90px"
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
        >
          <CardVisual numberSize={"large"} data={simpleCard} />
        </Card>
      </div>

      <div key="n" style={{ border: "solid" }}>
        <Card title="days stock held" width="353px" height="90px">
          <CardVisual numberSize={"large"} data={defaultVisualData} />
        </Card>
      </div>
    </GridLayout>
  );
};
