import React from "react";
export type Props = {
  content?: string;
  threshold?: string | number;
  showTopArrow?: boolean;
  showDownArrow?: boolean;
  size?:
    | "smaller"
    | "xx-small"
    | "x-small"
    | "small"
    | "medium"
    | "xx-large"
    | "x-large"
    | "larger";
  showIcon?: React.ReactNode;
  showAmount?: string;
};
