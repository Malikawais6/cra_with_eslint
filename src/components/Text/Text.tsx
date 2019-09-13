import React  from "react";
import { TextStyles } from "./Text.style";
import { Props } from "./Text.type";
const Text: React.SFC<Props> = (props: Props): any=> {
  return <TextStyles {...props}></TextStyles>;
};

export default Text;
