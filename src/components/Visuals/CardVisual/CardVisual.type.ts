export type SizeProps =
  | "small"
  | "x-small"
  | "medium"
  | "x-large"
  | "large"
  | undefined;

export type ThresholdProps = "top" | "down" | "normal" | undefined;

export type DataProps = {
  numberContent?: string;
  numberThreshold?: number;
  percentContent?: string;
  percentAmount?: string;
  progressPercentage?: number;
  numberThresholdStatus?: ThresholdProps;
};

export type Props = {
  showChart?: boolean;
  showProgressBar?: boolean;
  showInlineProgressBar?: boolean;
  numberSize?: SizeProps;
  percentSize?: SizeProps;
  data?: DataProps;
};
