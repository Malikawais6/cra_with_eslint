import React from "react";

import { ContentWrapperStyle } from "./Layout.style";

const Content = (props: any) => {
  return <ContentWrapperStyle>{props.children}</ContentWrapperStyle>;
};

export default Content;
