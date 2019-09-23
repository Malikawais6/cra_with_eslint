import React from "react";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import Sidebar from "./Layout/Sidebar";
import { Layout } from "antd";
const App = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Content />
      </Layout>
    </Layout>
  );
};

export default App;
