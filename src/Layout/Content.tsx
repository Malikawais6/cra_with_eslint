import React from "react";
import { Layout } from "antd";
import { ContentStyles } from "./Layout.style";
import Finance from "../pages/Finance";
const Content = (props: any) => {
  return (
    <ContentStyles>
      <Layout.Content>
        {props.children}
      </Layout.Content>
    </ContentStyles>
  );
};
export default Content;
