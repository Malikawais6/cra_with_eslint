type TooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

type ThemeType = "filled" | "outlined" | "twoTone";
export interface IconProps {
  tabIndex?: number;
  type?: string;
  className?: string;
  theme?: ThemeType;
  title?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  spin?: boolean;
  rotate?: number;
  style?: React.CSSProperties;
}
export type RenderFunction = () => React.ReactNode;
export interface TooltipProps {
  placement?: TooltipPlacement;
  title: string | RenderFunction;
  className?: string;
}
