import { ReactNode } from "react";

export type Props = {
  title?: string;
  height?: string;
  width?: string;
  footer?: boolean;
  visible?: boolean;
  children?: ReactNode;
  handleOk?: () => void;
  handleCancel?: () => void;
};
