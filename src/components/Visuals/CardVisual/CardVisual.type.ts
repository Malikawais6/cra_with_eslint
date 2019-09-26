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
  percentSize?: SizeProps;
  percentAmount?: string;
  progressPercentage?: number;
  numberThresholdStatus?: ThresholdProps;
};

export interface Props extends DataProps {
  showChart?: boolean;
  showProgressBar?: boolean;
  showInlineProgressBar?: boolean;
  numberSize?: SizeProps;
  data?: DataProps;
}
