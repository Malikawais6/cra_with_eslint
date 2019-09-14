import React from "react";
import Icon from "./components/Icon/Icon";
import Card  from "./components/Card/Card";

const App = () => {
  return (
    <Card title="Default size card" extra={<Icon
      icon={{ type: "star" }}
      tooltip={{
        title: () => <span>prompt text</span>
      }}
    />} width="30vw" height="50vh">
     Content 
    </Card>
  );
};

export default App;
