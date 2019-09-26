import Numeral from "numeral";

const numeralNumberContent = `£${Numeral(12312542).format("0,000,000")}`;
const inlineNumberContent = `£${Numeral(25425).format("0,000,000")}`;

export const DefaultCardData = {
  numberContent: numeralNumberContent,
  numberThreshold: 30
};

export const CompleteCardData = {
  numberContent: numeralNumberContent,
  percentContent: "120%",
  percentAmount: "$155",
  progressPercentage: 35,
  numberThreshold: 30
};

export const InlineProgressBarWithNumberData = {
  numberContent: inlineNumberContent,
  numberThreshold: 30,
  progressPercentage: 85
};

export const SimpleCard = {
  numberContent: "55 months"
};
