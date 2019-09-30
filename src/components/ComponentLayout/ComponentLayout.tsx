import React, { useEffect } from "react";

import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets";
import { CardVisual } from "../Visuals/CardVisual/CardVisual";
import { GridLayoutStyle as GridLayout } from "./ComponentLayout.style";
import {
  GiftCardVolumeData,
  RevenueCardData,
  CostPerCodeCardData,
  ProcessingFeeCardData,
  SaasCardData,
  MiscallaneousCardData,
  RunawayCardData,
  CashInBankCardData,
  MonthlyBudgetCardData,
  FloatsWithBrandCardData,
  StockHeldCardData,
  DepositsCardData,
  AverageDaysFloatHeldCardData,
  DayStockHeldCardData
} from "../Visuals/mockData";

export const ComponentLayout = () => {
  var layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 4 },
    { i: "b", x: 4, y: 0, w: 4, h: 4 },
    { i: "c", x: 8, y: 0, w: 4, h: 1 },
    { i: "d", x: 8, y: 3, w: 4, h: 1 },
    { i: "e", x: 8, y: 6, w: 4, h: 1 },
    { i: "f", x: 8, y: 9, w: 4, h: 1 },
    { i: "g", x: 0, y: 12, w: 4, h: 1.23 },
    { i: "h", x: 4, y: 12, w: 4, h: 1.23 },
    { i: "i", x: 8, y: 12, w: 4, h: 1.23 },
    { i: "j", x: 0, y: 16, w: 4, h: 1.23 },
    { i: "k", x: 4, y: 16, w: 4, h: 1.23 },
    { i: "l", x: 8, y: 16, w: 4, h: 1.23 },
    { i: "m", x: 0, y: 20, w: 4, h: 1.23 },
    { i: "n", x: 4, y: 20, w: 4, h: 1.23 }
  ];
  const layouts = {
    lg: layout,
    sm: layout,
    md: layout,
    xs: layout,
    xxs: layout
  };
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 10);
  }, []);
  return (
    <GridLayout
      isDraggable={false}
      className="layout"
      layouts={layouts}
      rowHeight={75}
      margin={[15, 15]}
      measureBeforeMount={false}
      breakpoints={{ lg: 1100, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
    >
      <div key="a" className="card-wrapper">
        <Card
          title="Gift Card Volume"
          cardType="visual"
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
            numberSize={"x-large"}
            percentSize={"large"}
            numberThresholdStatus={"normal"}
            data={GiftCardVolumeData}
          />
        </Card>
      </div>

      <div key="b">
        <Card
          title="Revenue"
          cardType="visual"
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
            numberSize={"x-large"}
            percentSize={"large"}
            data={RevenueCardData}
            numberThresholdStatus={"top"}
          />
        </Card>
      </div>

      <div key="c">
        <Card title="Cost per code" cardType="cost" showInfo={true}>
          <CardVisual
            numberSize={"medium"}
            numberThresholdStatus={"top"}
            data={CostPerCodeCardData}
          />
        </Card>
      </div>

      <div key="d">
        <Card title="Processing fee" cardType="cost" showInfo={true}>
          <CardVisual
            numberSize={"medium"}
            numberThresholdStatus={"top"}
            data={ProcessingFeeCardData}
          />
        </Card>
      </div>

      <div key="e">
        <Card title="SaaS" cardType="cost" showInfo={true}>
          <CardVisual
            showInlineProgressBar={true}
            numberSize={"medium"}
            data={SaasCardData}
            numberThresholdStatus={"top"}
          />
        </Card>
      </div>

      <div key="f">
        <Card title="Miscallaneous" cardType="cost">
          <CardVisual
            numberSize={"medium"}
            numberThresholdStatus={"top"}
            data={MiscallaneousCardData}
          />
        </Card>
      </div>

      <div key="g">
        <Card title="Runway">
          <CardVisual numberSize={"large"} data={RunawayCardData} />
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
          <CardVisual numberSize={"large"} data={CashInBankCardData} />
        </Card>
      </div>

      <div key="i">
        <Card title="Monthly budget" showInfo={true}>
          <CardVisual numberSize={"large"} data={MonthlyBudgetCardData} />
        </Card>
      </div>

      <div key="j">
        <Card title="Floats with Brand">
          <CardVisual
            numberSize={"large"}
            numberThresholdStatus={"top"}
            data={FloatsWithBrandCardData}
          />
        </Card>
      </div>

      <div key="k">
        <Card title="Stock held">
          <CardVisual
            numberSize={"large"}
            numberThresholdStatus={"top"}
            data={StockHeldCardData}
          />
        </Card>
      </div>

      <div key="l">
        <Card
          title="Deposits"
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
            numberSize={"large"}
            showInlineProgressBar={true}
            data={DepositsCardData}
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
          <CardVisual
            numberSize={"large"}
            data={AverageDaysFloatHeldCardData}
          />
        </Card>
      </div>

      <div key="n">
        <Card title="days stock held">
          <CardVisual
            numberSize={"large"}
            numberThresholdStatus={"down"}
            data={DayStockHeldCardData}
          />
        </Card>
      </div>
    </GridLayout>
  );
};
