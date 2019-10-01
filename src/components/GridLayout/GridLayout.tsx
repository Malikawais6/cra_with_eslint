import React, { useEffect, useMemo } from "react";

import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets";
import { GridLayoutStyle as AntdGridLayout } from "./GridLayout.style";
import { useDashboardContext } from "../../pages/Dashboard/context/DashboardContextProvider";

export const GridLayout = () => {
  const { state: dashboardState } = useDashboardContext();
  const layout =
    useMemo(() => {
      return dashboardState && dashboardState.metrics.map(x => x.layout);
    }, []) || [];

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
    <AntdGridLayout
      isDraggable={false}
      className="layout"
      layouts={layouts}
      rowHeight={75}
      margin={[15, 15]}
      measureBeforeMount={false}
      breakpoints={{ lg: 1100, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
    >
      {dashboardState &&
        dashboardState.metrics.map(metric => (
          <div key={metric.id}>
            <Card
              title={metric.title}
              cardType={metric.cardType}
              showInfo={metric.showInfo}
              extra={
                metric.showGraphIcon ? (
                  <Icon
                    icon={{ component: () => <GraphIcon /> }}
                    tooltip={{
                      title: () => <span>prompt text</span>
                    }}
                  />
                ) : null
              }
            >
              {metric.visual({ data: metric.data })}
            </Card>
          </div>
        ))}
    </AntdGridLayout>
  );
};
