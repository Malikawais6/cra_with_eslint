import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";
import {Props} from "./Text.type"
storiesOf("Text", module).add("Default", () => <Text />);
storiesOf("Text", module).add("Default with Props", () => <Text size="small" />, { info: { inline: true } });
