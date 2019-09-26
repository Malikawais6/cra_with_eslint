import React from "react";
import { Layout } from "antd";
const Content = (props: any) => {
  return <Layout.Content>{props.children}</Layout.Content>;
};
export default Content;
