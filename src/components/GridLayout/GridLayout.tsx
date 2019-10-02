import React, { useEffect, useMemo } from "react";

import Card from "../Card/Card";
import Icon from "../Icon/Icon";
import { GraphIcon } from "../../assets";
import { GridLayoutStyle as AntdGridLayout } from "./GridLayout.style";
import {
  useDashboardContext,
  Metric
} from "../../pages/Dashboard/context/DashboardContextProvider";

export const GridLayout = () => {
  const { state: dashboardState } = useDashboardContext();
  const layout =
    useMemo(() => {
      return dashboardState && dashboardState.metrics.map(x => x.layout);
    }, [dashboardState]) || [];

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
        dashboardState.metrics.map((metric: Metric) => {
          const {
            id,
            title,
            cardType,
            showInfo,
            showGraphIcon,
            visual,
            data
          } = metric;
          return (
            <div key={id}>
              <Card
                title={title}
                cardType={cardType}
                showInfo={showInfo}
                extra={
                  showGraphIcon ? (
                    <Icon
                      icon={{ component: () => <GraphIcon /> }}
                      tooltip={{
                        title: () => <span>prompt text</span>
                      }}
                    />
                  ) : null
                }
              >
                {visual({ data })}
              </Card>
            </div>
          );
        })}
    </AntdGridLayout>
  );
};
