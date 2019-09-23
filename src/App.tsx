import React from "react";
import Number from "./components/Number/Number";
import "../node_modules/react-vis/dist/style.css";
import { GraphIcon } from "./assets";
import Icon from "./components/Icon/Icon";
import Card from "./components/Card/Card";
const App = () => {
  return (
    <Card
    title="Title"
    extra={
      <Icon
        icon={{ component:()=> <GraphIcon/> }}
        tooltip={{
          title: () => <span>prompt text</span>
        }}
      />
    }
    width="353px"
    height="342px"
    showInfo={true}
    threshold={20}
  >
    Content
  </Card>
  );
};

export default App;
