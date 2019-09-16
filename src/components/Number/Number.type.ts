export type Props = {
  content?: string;
  threshold?: string | number;
  thresholdStatus?: "top"|"down"|"normal";
  size?:
    | "smaller"
    | "xx-small"
    | "x-small"
    | "small"
    | "medium"
    | "xx-large"
    | "x-large"
    | "larger";
  showAmount?: string;
};
