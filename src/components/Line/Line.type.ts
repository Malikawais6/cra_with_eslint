import {HorizontalGridLinesProps} from "react-vis"
export type Props= HorizontalGridLinesProps & {
  HorizontalGridLines?: "dashed" | "fill";
  curve?:boolean;
  dashed?:boolean
}
