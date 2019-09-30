import React, { useContext, createContext, useReducer, Dispatch } from "react";

import { CardVisual } from "../../components/Visuals/CardVisual/CardVisual";
import { Props } from "../../components/Visuals/CardVisual/CardVisual.type";

const INITIALIZE_DASHBOARD = "INITIALIZE_DASHBOARD";

type Action = {
  type: "INITIALIZE_DASHBOARD";
};

interface Metric {
  id: string;
  title: string;
  data: any;
  visual: (props: any) => JSX.Element;
}

interface PeriodFiler {
  id: string;
  title: string;
  value: string;
}

type DashboardState = {
  metrics: Metric[];
  periodFilters: PeriodFiler[];
};

interface DashboardContextProps {
  state: DashboardState;
  dispatch: Dispatch<Action>;
}

const defaultState = {
  metrics: [
    {
      id: "cardVolume",
      title: "Gift Card Volume",
      data: null,
      visual: CardVisual
    }
  ],
  periodFilters: [
    {
      id: "1",
      title: "Last Week",
      value: "lastWeek"
    },
    {
      id: "2",
      title: "Last Month",
      value: "lastMonth"
    },
    {
      id: "3",
      title: "Last Year",
      value: "lastYear"
    }
  ]
};

const DashboardContext = createContext<Partial<DashboardContextProps>>({});

const reducer = (state: DashboardState, action: Action): DashboardState => {
  switch (action.type) {
    case INITIALIZE_DASHBOARD:
      return defaultState;
  }
};

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DashboardContext.Provider>
  );
};
