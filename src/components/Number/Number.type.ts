export type Props = {
  content?: string | number;
  threshold?: string | number;
  thresholdStatus?: "top" | "down" | "normal" | undefined;
  size?: "x-small" | "small" | "medium" | "x-large" | "large";
  showAmount?: string;
};
