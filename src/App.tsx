import React from "react";
import Icon from "./components/Icon/Icon"
const App: React.FC = () => {
  return  <Icon icon={{ type: "star" }} tooltip={{
    title:()=><span>prompt text</span>
}} />;
};

export default App;
