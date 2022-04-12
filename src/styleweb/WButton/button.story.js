import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import WButton from "./index";
import { View } from "react-native";

const Example = () => {
  const clicked = () => {
    console.log("button clicked");
  };
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <WButton type={"raised"} loading={false} onClick={clicked}></WButton>
    </View>
  );
};

storiesOf("Button", module).add("default", withInfo()(Example));

export default Example;
