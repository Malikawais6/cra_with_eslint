import React from "react";
import GridLayout from "react-grid-layout";

import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets";
import { CardVisual } from "../Visuals/CardVisual/CardVisual";
import {
  CompleteCardData,
  InlineProgressBarWithNumberData,
  SimpleCard,
  DefaultCardData
} from "../Visuals/mockData";

export const Layout = () => {
  var layout = [
    { i: "a", x: 0, y: 0, w: 3.8, h: 9.2 },
    { i: "b", x: 3.9, y: 0, w: 3.8, h: 9.2 },
    { i: "c", x: 7.8, y: 0, w: 3.8, h: 2.3 },
    { i: "d", x: 7.8, y: 2, w: 3.8, h: 2.3 },
    { i: "e", x: 7.8, y: 4, w: 3.8, h: 2.3 },
    { i: "f", x: 7.8, y: 6, w: 3.8, h: 2.3 },
    { i: "g", x: 0, y: 8, w: 3.8, h: 2.7 },
    { i: "h", x: 3.9, y: 8, w: 3.8, h: 2.7 },
    { i: "i", x: 7.8, y: 8, w: 3.8, h: 2.7 },
    { i: "j", x: 0, y: 10, w: 3.8, h: 2.7 },
    { i: "k", x: 3.9, y: 10, w: 3.8, h: 2.7 },
    { i: "l", x: 7.8, y: 10, w: 3.8, h: 2.7 },
    { i: "m", x: 0, y: 12, w: 3.8, h: 2.7 },
    { i: "n", x: 3.9, y: 14, w: 3.8, h: 2.7 }
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
      <div key="a">
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
          threshold={20}
        >
          <CardVisual
            showChart={true}
            showProgressBar={true}
            numberSize={"large"}
            percentSize={"large"}
            numberThresholdStatus={"top"}
            data={CompleteCardData}
          />
        </Card>
      </div>

      <div key="b">
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
        >
          <CardVisual
            showChart={true}
            showProgressBar={true}
            numberSize={"large"}
            percentSize={"large"}
            data={CompleteCardData}
            numberThresholdStatus={"top"}
          />
        </Card>
      </div>

      <div key="c">
        <Card title="Cost per code" showInfo={true}>
          <CardVisual
            numberSize={"medium"}
            numberThresholdStatus={"top"}
            data={DefaultCardData}
          />
        </Card>
      </div>

      <div key="d">
        <Card title="Processing fee" showInfo={true}>
          <CardVisual
            numberSize={"medium"}
            numberThresholdStatus={"top"}
            data={DefaultCardData}
          />
        </Card>
      </div>

      <div key="e">
        <Card title="SaaS" threshold={20} showInfo={true}>
          <CardVisual
            showInlineProgressBar={true}
            numberSize={"medium"}
            data={InlineProgressBarWithNumberData}
            numberThresholdStatus={"top"}
          />
        </Card>
      </div>

      <div key="f">
        <Card title="Miscallaneous">
          <CardVisual
            numberSize={"medium"}
            numberThresholdStatus={"top"}
            data={DefaultCardData}
          />
        </Card>
      </div>

      <div key="g">
        <Card title="Runway">
          <CardVisual numberSize={"large"} data={SimpleCard} />
        </Card>
      </div>

      <div key="h">
        <Card
          title="Cash in Bank"
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
        >
          <CardVisual numberSize={"large"} data={SimpleCard} />
        </Card>
      </div>

      <div key="i">
        <Card title="Monthly budget" showInfo={true}>
          <CardVisual numberSize={"large"} data={SimpleCard} />
        </Card>
      </div>

      <div key="j">
        <Card title="Floats with Brand">
          <CardVisual
            numberSize={"large"}
            numberThresholdStatus={"top"}
            data={DefaultCardData}
          />
        </Card>
      </div>

      <div key="k">
        <Card title="Stock held">
          <CardVisual
            numberSize={"large"}
            numberThresholdStatus={"top"}
            data={DefaultCardData}
          />
        </Card>
      </div>

      <div key="l">
        <Card
          title="Deposits"
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
            data={InlineProgressBarWithNumberData}
            numberThresholdStatus={"top"}
          />
        </Card>
      </div>

      <div key="m">
        <Card
          title="Average days float held"
          extra={
            <Icon
              icon={{ component: () => <GraphIcon /> }}
              tooltip={{
                title: () => <span>prompt text</span>
              }}
            />
          }
        >
          <CardVisual numberSize={"large"} data={SimpleCard} />
        </Card>
      </div>

      <div key="n">
        <Card title="days stock held">
          <CardVisual
            numberSize={"large"}
            numberThresholdStatus={"top"}
            data={DefaultCardData}
          />
        </Card>
      </div>
    </GridLayout>
  );
};
