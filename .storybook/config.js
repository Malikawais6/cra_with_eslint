import { configure,addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
const req = require["context"]("../src/components", true, /.story.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withInfo({
    inline: true,
    source: true
  })
);

configure(loadStories, module);
