export type Props = {
  content?: string;
  threshold?: string | number;
  thresholdStatus?: "top"|"down"|"normal";
  size?:
    | "x-small"
    | "small"
    | "medium"
    | "x-large"
    | "large";
  showAmount?: string;
};
