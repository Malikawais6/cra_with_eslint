import Numeral from "numeral";

import { DataProps } from "../Visuals/CardVisual/CardVisual.type";
const getNumeralFigure = (digit: number) => {
  return `£${Numeral(digit).format("0,000,000")}`;
};

export const GiftCardVolumeData = {
  numberContent: getNumeralFigure(2100000),
  percentContent: "120%",
  percentAmount: getNumeralFigure(1000000),
  progressPercentage: 100,
  numberThreshold: "0",
  thresholdStatus: "normal"
};

export const RevenueCardData = {
  numberContent: getNumeralFigure(65505),
  percentContent: "30%",
  percentAmount: getNumeralFigure(130000),
  progressPercentage: 30,
  numberThreshold: 4.5,
  thresholdStatus: "top"
};

export const CostPerCodeCardData = {
  numberContent: getNumeralFigure(6000),
  numberThreshold: 13,
  thresholdStatus: "top"
};

export const ProcessingFeeCardData = {
  numberContent: getNumeralFigure(12000),
  numberThreshold: 6,
  thresholdStatus: "top"
};

export const SaasCardData = {
  numberContent: getNumeralFigure(45000),
  numberThreshold: 11,
  progressPercentage: 100,
  percentContent: "120%",
  thresholdStatus: "top"
};

export const MiscallaneousCardData = {
  numberContent: getNumeralFigure(1402),
  numberThreshold: 4.5,
  thresholdStatus: "top"
};

export const RunawayCardData = {
  numberContent: "55 months"
};

export const CashInBankCardData = {
  numberContent: getNumeralFigure(1500000)
};

export const MonthlyBudgetCardData = {
  numberContent: getNumeralFigure(155450)
};

export const FloatsWithBrandCardData = {
  numberContent: getNumeralFigure(406000),
  numberThreshold: 306,
  thresholdStatus: "top"
};

export const StockHeldCardData = {
  numberContent: getNumeralFigure(318000),
  numberThreshold: 4.5,
  thresholdStatus: "top"
};

export const DepositsCardData = {
  numberContent: getNumeralFigure(153000),
  numberThreshold: 4.5,
  progressPercentage: 100,
  percentContent: "120%",
  thresholdStatus: "top"
};

export const AverageDaysFloatHeldCardData = {
  numberContent: "15 days"
};

export const DayStockHeldCardData = {
  numberContent: "18 days",
  numberThreshold: 33,
  thresholdStatus: "down"
};

export const DefaultCardData: DataProps = {
  numberContent: getNumeralFigure(2100000),
  numberThreshold: 13,
  thresholdStatus: "top"
};

export const CompleteCardData: DataProps = {
  numberContent: getNumeralFigure(2100000),
  percentContent: "120%",
  percentAmount: "$155",
  progressPercentage: 35,
  numberThreshold: 30,
  thresholdStatus: "top"
};

export const InlineProgressBarWithNumberData: DataProps = {
  numberContent: getNumeralFigure(45000),
  numberThreshold: 30,
  progressPercentage: 85,
  thresholdStatus: "top"
};
