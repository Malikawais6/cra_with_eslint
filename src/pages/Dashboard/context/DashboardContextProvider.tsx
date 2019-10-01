import React, {
  useContext,
  createContext,
  Dispatch,
  useEffect
} from "react";

import { useCustomReducer } from "../../../components/customHooks/useCustomReducer";
import { CardVisualWithChart } from "../../../components/Visuals/CardVisual/CardVisualWithChart/CardVisualWithChart";
import { CardWithLargeNumberSize } from "../../../components/Visuals/CardVisual/CardWithContentSizes/CardWithLargeNumberSize";
import { CardWithMediumNumberSize } from "../../../components/Visuals/CardVisual/CardWithContentSizes/CardWithMediumNumberSize";
import { CardWithLargeContentSizeAndInlineProgressBar } from "../../../components/Visuals/CardVisual/CardWithInlineProgressBar/CardWithLargeContentSizeAndProressBar";
import { CardWithMediumContentSizeAndInlineProgressBar } from "../../../components/Visuals/CardVisual/CardWithInlineProgressBar/CardWithMediumContentSizeAndProgressBar";
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
  } from "../../../components/Visuals/mockData";

export const INITIALIZE_DASHBOARD = "INITIALIZE_DASHBOARD";

export type Action =
  | {
      type: "INITIALIZE_DASHBOARD";
    }
  | {
      type: "FILTER";
      periodFilterId: string;
    };

interface Layout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
interface Metric {
  id: string;
  title: string;
  data: any;
  visual: (props: any) => JSX.Element;
  showInfo?: boolean;
  showGraphIcon?: boolean;
  cardType?:  "visual" | "cost";
  layout: Layout;
}

interface PeriodFiler {
  id: string;
  title: string;
  value: string;
}

export type DashboardState = {
  metrics: Metric[];
  periodFilters: PeriodFiler[];
};

interface DashboardContextProps {
  state: DashboardState;
  dispatch: Dispatch<Action>;
}

const defaultState:DashboardState = {
  metrics: [
    {
      id: "cardVolume",
      title: "Gift Card Volume",
      data: GiftCardVolumeData,
      visual: CardVisualWithChart,
      cardType: "visual",
      showGraphIcon: true,
      layout: { i: "cardVolume", x: 0, y: 0, w: 4, h: 4 }
    },
    {
      id: "revenue",
      title: "Revenue",
      data: RevenueCardData,
      visual: CardVisualWithChart,
      cardType: "visual",
      showGraphIcon: true,
      layout: { i: "revenue", x: 4, y: 0, w: 4, h: 4 }
    },
    {
      id: "codeCost",
      title: "Cost per code",
      data: CostPerCodeCardData,
      visual: CardWithMediumNumberSize,
      cardType: "cost",
      showInfo:true,
      layout: { i: "codeCost", x: 8, y: 0, w: 4, h: 1 }
    },
    {
      id: "processingFee",
      title: "Processing fee",
      data: ProcessingFeeCardData,
      visual: CardWithMediumNumberSize,
      cardType: "cost",
      showInfo:true,
      layout: { i: "processingFee", x: 8, y: 3, w: 4, h: 1 }
    },
    {
      id: "saas",
      title: "SaaS",
      data: SaasCardData,
      visual: CardWithMediumContentSizeAndInlineProgressBar,
      cardType: "cost",
      showInfo:true,
      layout: { i: "saas", x: 8, y: 6, w: 4, h: 1 }
    },
    {
      id: "miscallaneous",
      title: "Miscallaneous",
      data: MiscallaneousCardData,
      visual: CardWithMediumNumberSize,
      cardType: "cost",
      layout: { i: "miscallaneous", x: 8, y: 9, w: 4, h: 1 }
    },
    {
      id: "runway",
      title: "Runway",
      data: RunawayCardData,
      visual: CardWithLargeNumberSize,

      layout: { i: "runway", x: 0, y: 12, w: 4, h: 1.23 }
    },
    {
      id: "bankCash",
      title: "Cash in Bank",
      data: CashInBankCardData,
      visual: CardWithLargeNumberSize,
      showGraphIcon: true,
      layout: { i: "bankCash", x: 4, y: 12, w: 4, h: 1.23 }
    },
    {
      id: "monthlyBudget",
      title: "Monthly budget",
      data: MonthlyBudgetCardData,
      visual: CardWithLargeNumberSize,
      showInfo:true,
      layout: { i: "monthlyBudget", x: 8, y: 12, w: 4, h: 1.23 }
    },
    {
      id: "floatsBrand",
      title: "Floats with Brand",
      data: FloatsWithBrandCardData,
      visual: CardWithLargeNumberSize,
      layout: { i: "floatsBrand", x: 0, y: 16, w: 4, h: 1.23 }
    },
    {
      id: "stockheld",
      title: "Stock held",
      data: StockHeldCardData,
      visual: CardWithLargeNumberSize,
      layout: { i: "stockheld", x: 4, y: 16, w: 4, h: 1.23 }
    },
    {
      id: "deposits",
      title: "Deposits",
      data: DepositsCardData,
      visual: CardWithLargeContentSizeAndInlineProgressBar,
      showInfo:true,
      showGraphIcon: true,
      layout: { i: "deposits", x: 8, y: 16, w: 4, h: 1.23 }
    },
    {
      id: "avgDayFloatHeld",
      title: "Average days float held",
      data: AverageDaysFloatHeldCardData,
      visual: CardWithLargeNumberSize,
      layout: { i: "avgDayFloatHeld", x: 0, y: 20, w: 4, h: 1.23 }
    },
    {
      id: "daysStockheld",
      title: "days stock held",
      data: DayStockHeldCardData,
      visual: CardWithLargeNumberSize,
      layout: { i: "daysStockheld", x: 4, y: 20, w: 4, h: 1.23 }
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
    default:
      return defaultState;
  }
};

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardContextProvider = (props: any) => {
  const [state, dispatch] = useCustomReducer(reducer, defaultState);

  useEffect(() => {
    // dispatch(fetchCardsData);
  }, []);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DashboardContext.Provider>
  );
};
